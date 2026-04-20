# School of Computing &mdash; Year 4 Project Proposal Form

## SECTION A

|                 	|                  	|
|---------------------|----------------------|
|Project Title:   	| AI-Assisted CryptoCurrency Trading Simulator |
|Student 1 Name:  	| Eamon Goonan     	|
|Student 1 ID:    	| 19765759         	|
|Student 2 Name:  	| Mudiaga Jerry Dortie |
|Student 2 ID:    	| 19339753           	|
|Project Supervisor:  | Dr. Hossein           	|


## SECTION B

### Introduction

Our CA400 project investigates the areas of Cryptocurrency and AI. 
It will be a Cryptocurrency Trading Simulator web-application aimed at beginner traders. 
The main feature we hope to implement this year is an AI sentiment analysis model that provides market forecasting of cryptocurrencies, 
based on incoming Twitter live feed.

The project predominantly caters to novice cryptocurrency traders eager to hone their trading prowess. 
It offers a safe environment for paper trading and it allows the users to interact with an AI chatbot for educational purposes, 
allowing users to practise without financial risk. 
Furthermore, the platform integrates an AI assistant designed to assist traders in deciphering the prevailing market sentiment, 
ensuring they are well-equipped with insights and knowledge as they navigate the intricate world of cryptocurrency trading.





### Outline

The proposed project aims to provide a comprehensive platform tailored for beginner traders. 
It will integrate a live AI-driven news feed to gauge market sentiment, ensuring traders are well-informed. 
Additional features we hope to build include a dedicated learning section, 
offering insights and strategies to enhance their skills and safeguard their investments. 

The platform will provide detailed analytics on previous trades, 
showcasing profit and loss metrics, return on investment, and vital market data like volume, 
open interest, and the ratio of long to short positions. 
Additionally, users can access live candle or line charts across various time frames. 
In essence, this platform offers a holistic toolkit for beginners, 
allowing them to immerse themselves in the trading realm without jeopardising real capital.




### Background
The inspiration for the project stemmed from witnessing firsthand the challenges faced by our friends and family during the crypto bull run.
Many incurred losses, primarily attributed to their limited understanding of the intricate dynamics of the cryptocurrency market. 
Recognizing this gap, we felt compelled to create a platform tailored for beginners. 
Our vision was to offer a safe haven where newcomers could acquire knowledge about the crypto landscape and refine their trading strategies, 
all without the looming threat of financial setbacks. 

Through this initiative, we aim to equip users with the tools and insights they need to navigate the volatile world of cryptocurrency more confidently and prudently.


### Achievements

**Implemented:**

- **Paper trading** — users can buy and sell cryptocurrencies against a $10,000 virtual starting balance, with real-time prices sourced from Binance
- **Portfolio tracking** — open and closed positions are tracked with per-trade PNL, ROI, and all-time aggregate metrics
- **AI sentiment analysis** — each article in the live news feed is analyzed by Anthropic's Claude model, returning a BULLISH / BEARISH / NEUTRAL label and a one-sentence explanation
- **Live news feed** — streaming cryptocurrency news delivered via WebSocket
- **Price charts** — candlestick and line charts across multiple timeframes
- **Trader following** — browse professional trader data via the RapidAPI integration
- **User accounts** — registration, login, and per-user portfolio isolation

**Planned but not implemented:**

- *React frontend* — Django's built-in templating system was used instead; React added unnecessary complexity for this scope
- *Twitter/X live feed for sentiment* — API access restrictions made this infeasible; replaced with a WebSocket news feed and Claude-based analysis
- *AI chatbot for education* — deprioritized in favor of completing core trading and sentiment features
- *Live leaderboard of professional traders* — the following page provides trader data but not a ranked leaderboard
- *Stop-loss orders* — not implemented
- *Technical indicators (open interest, volume, long/short ratio)* — not implemented


### Justification

The platform we're developing addresses a significant gap in the cryptocurrency trading landscape. Given the nascent nature of cryptocurrency trading, many existing platforms lack the feature of paper trading, which allows users to practise without real financial risk. This is where our platform becomes invaluable, especially for beginners. The world of crypto news can be overwhelming and deciphering the jargon and complexities can be challenging for newcomers. Our AI assistant steps in to simplify this. By breaking down and interpreting live market-related news from esteemed sources like Bloomberg, CoinDesk, Reuters, and CoinTelegraph, it ensures that users are not just informed, but also understand the implications of the news. Whether it's a sudden market surge, regulatory changes, or technological advancements, users will be equipped to comprehend and act on these updates. This platform will be particularly beneficial in fast-paced trading environments, where timely and clear information can be the difference between profit and loss. With the use of live prices and charts the user will have the closest thing possible to real trading experience.


### Programming language(s)
Python: Used for the backend (Django).
HTML/CSS/JavaScript: Used for the frontend via Django templates (React was planned but not adopted — Django’s templating system proved sufficient for the scope).


### Programming tools / Tech stack
Visual Studio Code, PyCharm, Git, WebSockets, SQLite

### Hardware
N/A

### Learning Challenges
Embarking on this project, we decided to dive deep into a plethora of new technologies, tools, 
and languages, pushing the boundaries of our current expertise. 
One of the primary challenges we're taking on is the adoption of React for our web application development. 
This endeavour marks our voyage into the React ecosystem, and while the learning curve is steep, 
we're motivated by the opportunity to expand our skill set. 

Another significant leap for us is the venture into artificial intelligence; 
training an AI model from scratch without any prior experience is no small feat, 
but we're eager to explore this domain. Furthermore, our project demands real-time data visualisation, 
encompassing metrics like open interest, volume, and the ratio of longs to shorts. 
This will be our inaugural attempt at such intricate data representation. To fetch this market data, 
we'll be integrating various APIs and websockets, many of which are new to our toolkit. 
In essence, this project is not just about creating a platform but also about our journey of technological exploration and growth.


### Breakdown of work

Student 1 (Mudiaga Dortie)

> *Student 1 should complete this section.*
The work will be split evenly, Eamon and I will be meeting once a week to work on the project and once a week with our supervisor to review our progress and ask any questions if necessary.

Student 2 (Eamon Goonan)

> *Student 2 should complete this section.*
Mudiaga and I plan to split the work as evenly as possible, on both the frontend and backend of the project. We will meet weekly to catch up and ensure the work is evenly distributed.


