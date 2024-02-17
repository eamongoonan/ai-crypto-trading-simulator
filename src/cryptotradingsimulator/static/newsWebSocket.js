document.addEventListener('DOMContentLoaded', function () {
    const newsFeedUl = document.getElementById('news-feed');

    function addNewsItem(news) {
        if (!news.title) {
            console.error('News item missing title:', news);
            return; // Skip this news item if it doesn't have a title
        }

        // Create the news item container
        const newsItem = document.createElement('div');
        newsItem.style.display = 'flex';
        newsItem.style.marginBottom = '20px';
        newsItem.style.backgroundColor = '#f5f5f5';
        newsItem.style.padding = '10px';
        newsItem.style.borderRadius = '5px';

        // Add icon to the left
        if (news.icon) {
            const iconImg = document.createElement('img');
            iconImg.src = news.icon;
            iconImg.style.width = '50px';
            iconImg.style.height = '50px';
            iconImg.style.marginRight = '10px';
            iconImg.style.objectFit = 'cover';
            iconImg.style.borderRadius = '50%';
            newsItem.appendChild(iconImg);
        }

        // Create the content container
        const contentContainer = document.createElement('div');
        contentContainer.style.flexGrow = '1';
        contentContainer.style.display = 'flex';
        contentContainer.style.flexDirection = 'column';
        contentContainer.style.overflow = 'hidden'; // Prevents content from overflowing
        contentContainer.style.maxWidth = 'calc(100% - 60px)'; // Adjust based on your layout, assumes 50px image + 10px margin

        // Add title with hyperlink
        const title = document.createElement('a');
        title.textContent = news.title;
        // Check if the source is "Blogs", if so, use 'url', otherwise, use 'link'
        title.href = (news.source === "Blogs" && news.url) ? news.url : (news.link ? news.link : '#');
        title.target = "_blank"; // Open in a new tab
        title.style.color = 'green';
        title.style.fontWeight = 'bold';
        title.style.fontSize = '16px';
        title.style.textDecoration = 'none';
        contentContainer.appendChild(title);

        // Add time and date under the title
        if (news.time) {
            const time = document.createElement('div');
            time.textContent = new Date(news.time).toLocaleString();
            time.style.color = 'black';
            time.style.marginTop = '5px';
            time.style.fontSize = '12px';
            time.style.fontWeight = 'bold'; // Make bold
            contentContainer.appendChild(time);
        }

        // Add body if present
        if (news.body) {
            const body = document.createElement('p');
            body.textContent = news.body;
            body.style.color = 'black';
            body.style.marginTop = '10px';
            body.style.fontWeight = 'bold'; // Make bold
            contentContainer.appendChild(body);
            body.style.overflowWrap = 'break-word';
        }

        newsItem.appendChild(contentContainer);

        // Add image to the right if present
        if (news.image) {
            const image = document.createElement('img');
            image.src = news.image;
            image.style.width = '100px'; // Initial width
            image.style.height = 'auto';
            image.style.marginLeft = '10px';
            image.style.borderRadius = '5px';
            image.style.cursor = 'pointer'; // Change cursor on hover to indicate clickability
            image.addEventListener('click', () => {
                // Toggle expanded size on click
                if (image.style.width === '100px') {
                    image.style.width = '200px'; // Example expanded size
                } else {
                    image.style.width = '100px'; // Collapse back to original size
                }
            });
            newsItem.appendChild(image);
        }

        // Insert the new news item at the top of the news feed
        if (newsFeedUl.firstChild) {
            newsFeedUl.insertBefore(newsItem, newsFeedUl.firstChild);
        } else {
            // If there are no items in the list, just append the new item
            newsFeedUl.appendChild(newsItem);
        }
    }

    const ws = new WebSocket('wss://news.treeofalpha.com/ws');

    ws.onopen = function () {
        console.log('WebSocket connection established.');
        ws.send(JSON.stringify({ command: 'login', data: '43dcd1a581f7913d74da6e0cc5c90e8a22c5b55614dac9d9e2bf93b9d24a1808' }));
    };

    ws.onmessage = function (event) {
        console.log('WebSocket message received:', event.data); // Log received data for debugging
        try {
            const message = JSON.parse(event.data);
            addNewsItem(message);
        } catch (e) {
            console.error('Error parsing message data:', e);
        }
    };

    ws.onerror = function (error) {
        console.log('WebSocket error:', error);
    };

    ws.onclose = function () {
        console.log('WebSocket connection closed.');
    };

    // Render initial news items on page load
    if (initialNewsItems) {
    initialNewsItems.forEach(item => {
        addNewsItem(item); // Add each news item to the DOM
    });
}

});
