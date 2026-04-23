document.addEventListener('DOMContentLoaded', function () {
    const newsFeedUl = document.getElementById('news-feed');
    const wsToken = document.getElementById('news-ws-token')?.dataset.token || '';

    const SENTIMENT_COLORS = {
        BULLISH: { bg: '#d4edda', border: '#28a745', text: '#155724', icon: '↑' },
        BEARISH: { bg: '#f8d7da', border: '#dc3545', text: '#721c24', icon: '↓' },
        NEUTRAL: { bg: '#e2e3e5', border: '#6c757d', text: '#383d41', icon: '●' },
    };

    function makeSentimentBadge(sentiment, reason, coins) {
        const s = SENTIMENT_COLORS[sentiment] || SENTIMENT_COLORS.NEUTRAL;
        const coinTags = coins && coins.length
            ? coins.map(c => `<span style="background:#343a40;color:#fff;border-radius:4px;padding:1px 6px;font-size:11px;margin-right:3px;">${c}</span>`).join('')
            : '';
        return `
          <div style="margin-top:8px;padding:6px 10px;border-radius:5px;border-left:4px solid ${s.border};background:${s.bg};color:${s.text};font-size:13px;">
            <strong>${s.icon} ${sentiment}</strong>&nbsp;&nbsp;${reason || ''}
            ${coinTags ? `<div style="margin-top:4px;">${coinTags}</div>` : ''}
          </div>`;
    }

    function fetchSentiment(title, body, container) {
        const loadingEl = document.createElement('div');
        loadingEl.style.cssText = 'margin-top:8px;font-size:12px;color:#888;font-style:italic;';
        loadingEl.textContent = 'Analysing sentiment…';
        container.appendChild(loadingEl);

        fetch('/ai/sentiment/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken'),
            },
            body: JSON.stringify({ title, body }),
        })
            .then(r => r.json())
            .then(data => {
                loadingEl.outerHTML = makeSentimentBadge(
                    data.sentiment || 'NEUTRAL',
                    data.reason || '',
                    data.coins || []
                );
            })
            .catch(() => {
                loadingEl.remove();
            });
    }

    function getCookie(name) {
        const match = document.cookie.match(new RegExp('(^|;\\s*)' + name + '=([^;]*)'));
        return match ? decodeURIComponent(match[2]) : '';
    }

    function addNewsItem(news) {
        if (!news.title) return;

        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';

        if (news.icon) {
            const iconImg = document.createElement('img');
            iconImg.src = news.icon;
            iconImg.className = 'news-icon';
            newsItem.appendChild(iconImg);
        }

        const content = document.createElement('div');
        content.className = 'news-content';

        const title = document.createElement('a');
        title.textContent = news.title;
        title.href = (news.source === 'Blogs' && news.url) ? news.url : (news.link || '#');
        title.target = '_blank';
        title.className = 'news-title';
        content.appendChild(title);

        if (news.time) {
            const time = document.createElement('div');
            time.textContent = new Date(news.time).toLocaleString();
            time.className = 'news-time';
            content.appendChild(time);
        }

        if (news.body) {
            const body = document.createElement('p');
            body.textContent = news.body;
            body.className = 'news-body';
            content.appendChild(body);
        }

        newsItem.appendChild(content);

        if (news.image) {
            const image = document.createElement('img');
            image.src = news.image;
            image.className = 'news-image';
            image.addEventListener('click', () => {
                image.style.width = image.style.width === '200px' ? '100px' : '200px';
            });
            newsItem.appendChild(image);
        }

        newsFeedUl.insertAdjacentElement('afterbegin', newsItem);
        fetchSentiment(news.title, news.body || '', content);
    }

    const placeholder = document.getElementById('news-placeholder');

    function removePlaceholder() {
        if (placeholder) placeholder.remove();
    }

    let reconnectDelay = 2000;
    let reconnectTimer = null;

    function connect() {
        const ws = new WebSocket('wss://news.treeofalpha.com/ws');

        ws.onopen = function () {
            reconnectDelay = 2000;
            if (wsToken) {
                ws.send(JSON.stringify({ command: 'login', data: wsToken }));
            }
        };

        ws.onmessage = function (event) {
            try {
                const data = JSON.parse(event.data);
                if (data.title) {
                    removePlaceholder();
                    addNewsItem(data);
                }
            } catch (e) {
                console.error('Error parsing news message:', e);
            }
        };

        ws.onerror = function () {
            if (placeholder) {
                placeholder.className = 'alert alert-warning';
                placeholder.textContent = 'News feed connection failed — retrying…';
            }
        };

        ws.onclose = function () {
            reconnectTimer = setTimeout(() => {
                reconnectDelay = Math.min(reconnectDelay * 2, 30000);
                connect();
            }, reconnectDelay);
        };
    }

    connect();
});
