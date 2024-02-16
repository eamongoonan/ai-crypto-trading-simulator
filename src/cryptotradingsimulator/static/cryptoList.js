// src/cryptoList.js
const cryptoList = [
    {
        name: 'Bitcoin',
        ticker: 'BTC',
        associatedTerms: ['Satoshi Nakamoto'],
    },
    {
        name: 'Ethereum',
        ticker: 'ETH',
        associatedTerms: ['Vitalik Buterin', 'Vitalik', 'ETHUSD', '$ETH'],
    },
    {
        name: 'Ripple',
        ticker: 'XRP',
        associatedTerms: ['Brad Garlinghouse', 'Chris Larsen'],
    },
    {
        name: 'BONK',
        ticker: '1000BONK',
        associatedTerms: ['bonk_inu'],
    },
    {
        name: 'Sui Network',
        ticker: 'SUI',
        associatedTerms: ['Greg Siourounis', ' Mysten Labs', 'Mark Lamb', 'Sudhu Arumugam'],
    },
    {
        name: 'PYTH Network',
        ticker: 'PYTH',
        associatedTerms: ['Michael Cahill'],
    },
    {
        name: 'BSV Blockchain',
        ticker: 'BSV',
        associatedTerms: [],
    },
    {
        name: 'SEI Network',
        ticker: 'SEI',
        associatedTerms: ['Jay Jog', 'Dan Edlebeck', 'Sei Labs'],
    },
    {
        name: 'CyberConnect',
        ticker: 'CYBER',
        associatedTerms: ['Wilson Wei'],
    },
    {
        name: 'Binance Coin',
        ticker: 'BNB',
        associatedTerms: ['Binance', 'CZ', 'Changpeng Zhao'],
    },
    {
        name: 'Cardano',
        ticker: 'ADA',
        associatedTerms: ['Charles Hoskinson'],
    },
    {
        name: 'Polygon',
        ticker: 'MATIC',
        associatedTerms: ['Sandeep Nailwal'],
    },
    {
        name: 'Yield Guild',
        ticker: 'YGG',
        associatedTerms: ['YieldGuild', 'Gabby Dizon', 'Yield Guild Games'],
    },
    {
        name: 'Dogecoin',
        ticker: 'DOGE',
        associatedTerms: ['Elon Musk', 'kabosumama'],
    },
    {
        name: 'Solana',
        ticker: 'SOL',
        associatedTerms: ['Anatoly Yakovenko'],
    },
    {
        name: 'Polkadot',
        ticker: 'DOT',
        associatedTerms: ['Gavin Wood'],
    },
    {
        name: 'Litecoin',
        ticker: 'LTC',
        associatedTerms: ['Charlie Lee'],
    },
    {
        name: 'Maverick Protocol',
        ticker: 'MAV',
        associatedTerms: ['Alvin Xu', 'Bob Baxley'],
    },
    {
        name: 'Shib',
        ticker: '1000SHIB',
        associatedTerms: ['Shytoshi', 'Shiba', 'Shibarium'],
    },
    {
        name: 'Radiant Capital',
        ticker: 'RDNT',
        associatedTerms: ['Gordon Yen'],
    },
    {
        name: 'Tron',
        ticker: 'TRX',
        associatedTerms: ['Justin Sun'],
    },
    {
        name: 'Avalanche',
        ticker: 'AVAX',
        associatedTerms: ['Emin Gün Sirer', 'Ava Labs'],
    },
    {
        name: 'DAI',
        ticker: 'DAI',
        associatedTerms: ['Rune Christensen'],
    },
    {
        name: 'Chainlink',
        ticker: 'LINK',
        associatedTerms: ['Sergey Nazarov'],
    },
    {
        name: 'Cosmos',
        ticker: 'ATOM',
        associatedTerms: ['Jae Kwon'],
    },
    {
        name: 'Monero',
        ticker: 'XMR',
        associatedTerms: ['Nicolas van Saberhagen'],
    },
    {
        name: 'Ethereum Classic',
        ticker: 'ETC',
        associatedTerms: ['Gavin Wood'],
    },
    {
        name: 'Uniswap',
        ticker: 'UNI',
        associatedTerms: ['Hayden Adams'],
    },
    {
        name: 'Bitcoin Cash',
        ticker: 'BCH',
    },
    {
        name: 'Stellar Lumens',
        ticker: 'XLM',
        associatedTerms: ['Stellar', 'Jed McCaleb'],
    },
    {
        name: 'Filecoin',
        ticker: 'FIL',
        associatedTerms: ['Juan Benet', 'Protocol Labs', 'proticollabs'],
    },
    {
        name: 'Aptos',
        ticker: 'APT',
        associatedTerms: ['Avery Ching', 'Mo Shaikh'],
    },
    {
        name: 'Hedera Hashgraph',
        ticker: 'HBAR',
        associatedTerms: ['Hedera', 'Shayne Higdon', 'Hashgraph'],
    },
    {
        name: 'Lido DAO',
        ticker: 'LDO',
        associatedTerms: ['Lido', 'Mary Tung'],
    },
    {
        name: 'NEAR Protocol',
        ticker: 'NEAR',
        associatedTerms: ['Near', 'Alexander Skidanov'],
    },
    {
        name: 'VeChain',
        ticker: 'VET',
        associatedTerms: ['Sunny Lu'],
    },
    {
        name: 'Arbitrum',
        ticker: 'ARB',
        associatedTerms: ['Offchain Labs', 'Steven Goldfeder'],
    },
    {
        name: 'ApeCoin',
        ticker: 'APE',
        associatedTerms: ['Yuga Labs', 'Bored Ape', 'BoredApeYC'],
    },
    {
        name: 'Algorand',
        ticker: 'ALGO',
        associatedTerms: ['Silvio Micali'],
    },
    {
        name: 'Quant',
        ticker: 'QNT',
        associatedTerms: ['Gilbert Verdian'],
    },
    {
        name: 'Internet Computer',
        ticker: 'ICP',
        associatedTerms: ['DFINITY Foundation', 'DFINITY', 'Dominic Williams'],
    },
    {
        name: 'Stacks',
        ticker: 'STX',
        associatedTerms: ['Muneeb Ali', 'Ryan Shea', 'BRC-20', 'Bitcoin Ordinal', 'Bitcoin Ordinals'],
    },
    {
        name: 'Fantom',
        ticker: 'FTM',
        associatedTerms: ['Andre Cronje', 'Cronje', 'Michael Kong'],
    },
    {
        name: 'The Graph',
        ticker: 'GRT',
        associatedTerms: ['Yaniv Tal', 'Jannis Pohlmann', 'Brandon Ramirez', 'graphprotocol'],
    },
    {
        name: 'EOS',
        ticker: 'EOS',
        associatedTerms: ['Yves La Rose', 'EOSUSD'],
    },
    {
        name: 'Decentraland',
        ticker: 'MANA',
        associatedTerms: ['Esteban Ordano'],
    },
    {
        name: 'MultiversX',
        ticker: 'EGLD',
        associatedTerms: ['Elrond Network', 'Elrond', 'Beniamin Mincu', 'Lucian Mincu'],
    },
    {
        name: 'Tezos',
        ticker: 'XTZ',
        associatedTerms: ['Arthur Breitman'],
    },
    {
        name: 'Aave',
        ticker: 'AAVE',
        associatedTerms: ['Stani Kulechov', 'Stani', 'AVARA'],
    },
    {
        name: 'Theta Token',
        ticker: 'THETA',
        associatedTerms: ['Theta Network', 'Mitch Liu'],
    },
    {
        name: 'FLOW',
        ticker: 'FLOW',
        associatedTerms: ['Roham Gharegozlou', 'Dapper Labs'],
    },
    {
        name: 'Arkham',
        ticker: 'ARKM',
        associatedTerms: ['Miguel Morel', 'Arkham Intel'],
    },
    {
        name: 'Axie Infinity',
        ticker: 'AXS',
        associatedTerms: ['Axie', 'Trung Nguyen', 'Sky Mavis'],
    },
    {
        name: 'ImmutableX',
        ticker: 'IMX',
        associatedTerms: ['Robbie Ferguson', 'Immutable'],
    },
    {
        name: 'Conflux Network',
        ticker: 'CFX',
        associatedTerms: ['Conflux', 'Andrew Chi-Chih Yao'],
    },
    {
        name: 'NEO',
        ticker: 'NEO',
        associatedTerms: ['Erik Zhang', 'Da Hongfei'],
    },
    {
        name: 'Bluzelle',
        ticker: 'BLZ',
        associatedTerms: ['Pavel Bains'],
    },
    {
        name: 'Chiliz',
        ticker: 'CHZ',
        associatedTerms: ['Socios', 'Alexandre Dreyfus', 'Dreyfus'],
    },
    {
        name: 'Rocket Pool',
        ticker: 'RPL',
        associatedTerms: ['David Rugendyke'],
    },
    {
        name: 'Terra Classic',
        ticker: '1000LUNC',
        associatedTerms: ['Terra', 'Do Kwon', 'Luna', 'Terraform Labs'],
    },
    {
        name: 'Mina',
        ticker: 'MINA',
        associatedTerms: ['Evan Shapiro'],
    },
    {
        name: 'Optimism',
        ticker: 'OP',
        associatedTerms: ['Jinglan Wang', 'Kevin Ho'],
    },
    {
        name: 'Klaytn',
        ticker: 'KLAY',
        associatedTerms: ['Jaesun Han', 'GroundX'],
    },
    {
        name: 'Curve',
        ticker: 'CRV',
        associatedTerms: ['Michael Egorov'],
    },
    {
        name: 'PancakeSwap',
        ticker: 'CAKE',
        associatedTerms: ['Henry Cavill'],
    },
    {
        name: 'DASH',
        ticker: 'DASH',
        associatedTerms: ['Evan Duffield'],
    },
    {
        name: 'MakerDAO',
        ticker: 'MKR',
        associatedTerms: ['JAKARTA', 'Rune Christensen'],
    },
    {
        name: 'Synthetix Network Token',
        ticker: 'SNX',
        associatedTerms: ['Synthetix', 'Kain Warwick'],
    },
    {
        name: 'Reserve Protocol',
        ticker: 'RSR',
        associatedTerms: ['reserveprotocol', 'RToken', 'Nevin Freeman'],
    },
    {
        name: 'GMX',
        ticker: 'GMX',
        associatedTerms: ['Arthur Hayes,'],
    },
    {
        name: 'BitTorrent',
        ticker: 'BTTC',
        associatedTerms: ['TRON Foundation', 'Justin Sun'],
    },
    {
        name: 'Zcash',
        ticker: 'ZEC',
        associatedTerms: ['Zooko Wilcox', 'ElectricCoinCo', 'Electric Coin Co'],
    },
    {
        name: 'eCash',
        ticker: '1000XEC',
        associatedTerms: ['Amaury Sechet'],
    },
    {
        name: 'MIOTA',
        ticker: 'IOTA',
        associatedTerms: ['Dominik Schiener'],
    },
    {
        name: 'Frax Share',
        ticker: 'FXS',
        associatedTerms: ['FRAX', 'Sam Kazemian'],
    },
    {
        name: 'SingularityNET Token',
        ticker: 'AGIX',
        associatedTerms: ['Singularity', 'Ben Goertzel', 'SingularityNET'],
    },
    {
        name: 'Pax Gold',
        ticker: 'PAXG',
        associatedTerms: ['Charles Cascarilla'],
    },
    {
        name: 'Trust Wallet Token',
        ticker: 'TWT',
        associatedTerms: ['Viktor Radchenko', 'Trust Wallet', 'Self Custody'],
    },
    {
        name: 'THORChain',
        ticker: 'RUNE',
        associatedTerms: ['Rune Christensen'],
    },
    {
        name: 'Loopring',
        ticker: 'LRC',
        associatedTerms: ['Daniel Wang'],
    },
    {
        name: 'Zilliqa',
        ticker: 'ZIL',
        associatedTerms: ['Amrit Kumar', 'Xinshu Don'],
    },
    {
        name: 'Ankr',
        ticker: 'ANKR',
        associatedTerms: ['Chandler Song'],
    },
    {
        name: 'FTX TOKEN',
        ticker: 'FTT',
        associatedTerms: ['FTX', 'Sbf', 'Alameda', 'Sam Bankman-Fried'],
    },
    {
        name: 'Render Token',
        ticker: 'RNDR',
        associatedTerms: ['Jules Urbach'],
    },
    {
        name: '1inch',
        ticker: '1INCH',
        associatedTerms: ['Anton Bukov', 'Surjey Kunz '],
    },
    {
        name: 'Mask Network',
        ticker: 'MASK',
        associatedTerms: ['Twitter Payment', 'Suji Yan'],
    },
    {
        name: 'Nexo',
        ticker: 'NEXO',
        associatedTerms: ['Antoni Trenchev'],
    },
    {
        name: 'Kava',
        ticker: 'KAVA',
        associatedTerms: ['Scott Stuart', 'Brian Kerr', ' Ruaridh O\'Donnell', 'Kava Labs'],
    },
    {
        name: 'Osmosis',
        ticker: 'OSMO',
        associatedTerms: ['Sunny Aggarwal', 'Josh Lee '],
    },
    {
        name: 'Enjin Coin',
        ticker: 'ENJ',
        associatedTerms: ['Maxim Blagov', 'Witek Radomski', 'Enjin'],
    },
    {
        name: 'Convex Finance',
        ticker: 'CVX',
        associatedTerms: ['Convex', 'Ricardo Rosales', 'Charlie Warren'],
    },
    {
        name: 'dYdX',
        ticker: 'DYDX',
        associatedTerms: ['Antonio Juliano'],
    },
    {
        name: 'Basic Attention Token',
        ticker: 'BAT',
        associatedTerms: ['Brendan Eich'],
    },
    {
        name: 'Open Campus',
        ticker: 'EDU',
        associatedTerms: ['Yogev Shelly', 'Oren Elbaz', 'TinyTap', 'Tiny Tap', 'opencampus_xyz'],
    },
    {
        name: 'NEM',
        ticker: 'XEM',
        associatedTerms: ['David Shaw '],
    },
    {
        name: 'SSV TOKEN',
        ticker: 'SSV',
        associatedTerms: ['Alon Muroch', 'Adam Afrima'],
    },
    {
        name: 'Balancer',
        ticker: 'BAL',
        associatedTerms: ['Fernando Martinelli'],
    },
    {
        name: 'Blur',
        ticker: 'BLUR',
        associatedTerms: ['Tieshun Roquerre', 'Blur_io', 'PacmanBlur'],
    },
    {
        name: 'Woo Network',
        ticker: 'WOO',
        associatedTerms: ['Jack Tan', 'Mark Pimentel'],
    },
    {
        name: 'Qtum',
        ticker: 'QTUM',
        associatedTerms: ['Patrick Dai', 'Steven Dai'],
    },
    {
        name: 'Oasis Network',
        ticker: 'ROSE',
        associatedTerms: ['Dawn Song', 'Oasis'],
    },
    {
        name: 'Decred',
        ticker: 'DCR',
        associatedTerms: ['Alex Yocom-Piatt', 'Dave Collins'],
    },
    {
        name: 'Ravencoin',
        ticker: 'RVN',
        associatedTerms: ['Bruce Fenton', 'Tron Black'],
    },
    {
        name: 'Theta Fuel',
        ticker: 'TFUEL',
        associatedTerms: ['Mitch Liu', 'Jieyi Long'],
    },
    {
        name: 'Magic',
        ticker: 'MAGIC',
        associatedTerms: ['Arthur Jen', 'Sean Li'],
    },
    {
        name: 'Terra',
        ticker: 'LUNA2',
        associatedTerms: ['Do Kwon', 'Terraform Labs', 'LUNA'],
    },
    {
        name: 'Compound',
        ticker: 'COMP',
        associatedTerms: ['Robert Leshner'],
    },
    {
        name: 'HOLO',
        ticker: 'HOT',
        associatedTerms: ['HOLOCHAIN', 'Arthur Brock', 'Eric Braun'],
    },
    {
        name: 'Fetch.AI',
        ticker: 'FET',
        associatedTerms: ['Fetch', 'Humayun Sheikh'],
    },
    {
        name: 'yearn.finance',
        ticker: 'YFI',
        associatedTerms: ['Yearn', 'banteg'],
    },
    {
        name: 'Celo',
        ticker: 'CELO',
        associatedTerms: [' Rene Reinsberg'],
    },
    {
        name: 'Injective',
        ticker: 'INJ',
        associatedTerms: ['Eric Chen', 'Albert Chon'],
    },
    {
        name: 'Kusama',
        ticker: 'KSM',
        associatedTerms: ['Gavin Wood', 'Peter Czaban', 'Robert Habermeier'],
    },
    {
        name: 'MobileCoin',
        ticker: 'MOB',
        associatedTerms: ['Joshua Goldbard', 'Shane Glynn'],
    },
    {
        name: 'Gala',
        ticker: 'GALA',
        associatedTerms: ['Gala Games', 'Eric Schiermeyer', 'Michael McCarthy'],
    },
    // {
    //   name: 'Harmony',
    //   ticker: 'ONE',
    //  associatedTerms: ['Stephen Tse'],
    //  },
    {
        name: 'Arweave',
        ticker: 'AR',
        associatedTerms: ['Sam Williams'],
    },
    {
        name: 'Astar',
        ticker: 'ASTR',
        associatedTerms: ['Sota Watanabe', 'Sota_Web3', 'Startale Labs'],
    },
    {
        name: 'Ethereum Name Service',
        ticker: 'ENS',
        associatedTerms: ['Nick Johnson'],
    },
    {
        name: 'Audius',
        ticker: 'Audio',
        associatedTerms: ['Roneil Rumburg', 'Forrest Browning'],
    },
    {
        name: 'OMG Network',
        ticker: 'OMG',
        associatedTerms: ['Vansa Chatikavanij'],
    },
    {
        name: 'Waves',
        ticker: 'WAVES',
        associatedTerms: ['Sasha Ivanov', 'Sasha'],
    },
    {
        name: 'Golem',
        ticker: 'GLM',
        associatedTerms: ['Piotr Janiuk'],
    },
    {
        name: 'IoTeX',
        ticker: 'IOTX',
        associatedTerms: ['Raullen Chai'],
    },
    {
        name: 'Green Metaverse Token',
        ticker: 'GMT',
        associatedTerms: ['STEPN'],
    },
    {
        name: 'Sushi',
        ticker: 'SUSHI',
        associatedTerms: ['Jared Grey', 'SushiSwap'],
    },
    {
        name: 'Glimmer',
        ticker: 'GLMR',
        associatedTerms: ['Derek Yoo', 'Moonbeam'],
    },
    {
        name: 'Render',
        ticker: 'RNDR',
        associatedTerms: ['Render Network', 'Jules Urbach'],
    },
    {
        name: 'Nervos',
        ticker: 'CKB',
        associatedTerms: ['Common Knowledge Base', 'TN Lee'],
    },
    {
        name: 'Pendle',
        ticker: 'Pendle',
        associatedTerms: ['Pendle Finance', 'Kevin Wang', 'Nervos Network'],
    },
    {
        name: 'JasmyCoin',
        ticker: 'JASMY',
        associatedTerms: ['JAPAN', 'Kunitake Ando'],
    },
    {
        name: 'Worldcoin',
        ticker: 'WLD',
        associatedTerms: ['OpenAI', 'Sam Altman', 'ChatGPT'],
    },
    {
        name: 'BAND',
        ticker: 'BAND',
        associatedTerms: ['Soravis Srinawakoon'],
    },
    {
        name: 'Gains Netowrk',
        ticker: 'GNS',
        associatedTerms: [' Seb', ' GainsNetwork_io'],
    },
    {
        name: 'Kadena',
        ticker: 'KDA',
        associatedTerms: ['Stuart Popejoy', 'William Martino'],
    },
    {
        name: 'Ocean Protocol',
        ticker: 'OCEAN',
        associatedTerms: ['Bruce Pon'],
    },
    {
        name: 'Siacoin',
        ticker: 'SC',
        associatedTerms: ['David Vorick', 'Luke Champine'],
    },
    {
        name: 'ICON',
        ticker: 'ICX',
        associatedTerms: ['Min Kim'],
    },
    {
        name: 'Celer Network',
        ticker: 'CELR',
        associatedTerms: ['Mo Dong', 'Junda Liu', 'Qingkai Liang', 'Xiaozhou Li', 'Celer'],
    },
    {
        name: 'Liquity',
        ticker: 'LQTY',
        associatedTerms: ['Robert Lauko', 'Rick Pardoe'],
    },
    {
        name: 'Ontology',
        ticker: 'ONT',
        associatedTerms: ['Jun Li'],
    },
    {
        name: 'IOST',
        ticker: 'IOST',
        associatedTerms: ['Jimmy Zhong'],
    },
    {
        name: 'Hashflow',
        ticker: 'HFT',
        associatedTerms: ['Varun Kuma'],
    },
    {
        name: '0x',
        ticker: 'ZRX',
        associatedTerms: ['Will Warren'],
    },
    {
        name: 'Livepeer',
        ticker: 'LPT',
        associatedTerms: ['Doug Petkanics'],
    },
    {
        name: 'Biconomy',
        ticker: 'BICO',
        associatedTerms: ['Ahmed Al-Balaghi'],
    },
    {
        name: 'Hive',
        ticker: 'HIVE',
        associatedTerms: ['Olivier Francois'],
    },
    {
        name: 'aelf',
        ticker: 'ELF',
        associatedTerms: ['Ma Haobo'],
    },
    {
        name: 'Reserve Rights',
        ticker: 'RSR',
        associatedTerms: ['Nevin Freeman'],
    },
    {
        name: 'FLUX',
        ticker: 'FLUX',
        associatedTerms: ['Daniell Keller'],
    },
    {
        name: 'SKALE Network',
        ticker: 'SKL',
        associatedTerms: ['SKALE', 'Stan Kladko', 'Jack O\'Holleran'],
    },
    {
        name: 'Alchemy Pay',
        ticker: 'ACH',
        associatedTerms: ['Alchemy', 'John Tan'],
    },
    {
        name: 'BinaryX',
        ticker: 'BNX',
        associatedTerms: ['Oleg Kurchenko'],
    },
    {
        name: 'WAX',
        ticker: 'WAXP',
        associatedTerms: ['William Quigley'],
    },
    {
        name: 'SafePal',
        ticker: 'SFP',
        associatedTerms: ['Veronica Wong'],
    },
    {
        name: 'AMP',
        ticker: 'AMP',
        associatedTerms: ['Tyler Spalding'],
    },
    {
        name: 'DigiByte',
        ticker: 'DGB',
        associatedTerms: ['Jared Tate'],
    },
    {
        name: 'iExecRLC',
        ticker: 'RLC',
        associatedTerms: ['iExec', 'Gilles Fedak', 'Haiwu'],
    },
    {
        name: 'Solar',
        ticker: 'SXP',
        associatedTerms: ['Joselito Lizarondo', 'nayiem'],
    },
    {
        name: 'Illuvium',
        ticker: 'ILV',
        associatedTerms: ['Warwick'],
    },
    {
        name: 'Storj',
        ticker: 'STORJ',
        associatedTerms: ['Shawn Wilkinson'],
    },
    {
        name: 'Gitcoin',
        ticker: 'GTC',
        associatedTerms: ['Kevin Owocki', 'Scott Moore'],
    },
    {
        name: 'UMA',
        ticker: 'UMA',
        associatedTerms: ['Allison Lu', 'Hart Lambur'],
    },
    {
        name: 'Lisk',
        ticker: 'LSK',
        associatedTerms: ['Max Kordek'],
    },
    {
        name: 'Horizen',
        ticker: 'ZEN',
        associatedTerms: ['Matthew Knight'],
    },
    {
        name: 'Space ID',
        ticker: 'ID',
    },
    {
        name: 'Syscoin',
        ticker: 'SYS',
        associatedTerms: ['Dan Wasyluk'],
    },
    {
        name: 'JOE',
        ticker: 'JOE',
        associatedTerms: ['Trader Joe '],
    },
    {
        name: 'RSK Infrastructure Framework',
        ticker: 'RIF',
        associatedTerms: ['Diego Gutiérrez Zaldívar'],
    },
    {
        name: 'API3',
        ticker: 'API3',
        associatedTerms: ['Heikki Vänttinen', 'Burak Benligiray'],
    },
    {
        name: 'Pundi X',
        ticker: 'PundiX',
        associatedTerms: ['Zac Cheah'],
    },
    {
        name: 'PlayDapp',
        ticker: 'PLA',
        associatedTerms: ['Moshua Choi'],
    },
    {
        name: 'Synapse',
        ticker: 'SYN',
        associatedTerms: ['Michał Domarecki'],
    },
    {
        name: 'Nano',
        ticker: 'XNO',
        associatedTerms: [' Colin LeMahieu'],
    },
    {
        name: 'KyberNetwork',
        ticker: 'KNC',
        associatedTerms: ['Kyber', 'Loi Luu', 'Victor Tran', 'Yaron Velner'],
    },
    {
        name: 'Smooth Love Potion',
        ticker: 'SLP',
        associatedTerms: ['Axie Edge'],
    },
    {
        name: 'ConsitutionDAO',
        ticker: 'PEOPLE',
        associatedTerms: ['Jonah Erlich'],
    },
    {
        name: 'Chromia',
        ticker: 'CHR',
        associatedTerms: ['Henrik Hjelte'],
    },
    {
        name: 'Merit Circle',
        ticker: 'BEAMX',
        associatedTerms: ['Marco van den Heuvel', 'BEAM'],
    },
    {
        name: 'Status Token',
        ticker: 'SNT',
        associatedTerms: ['Jarrad Hope', 'Carl Bennets'],
    },
    {
        name: 'Numeraire',
        ticker: 'NMR',
        associatedTerms: ['Richard Craib', 'Numerai'],
    },
    {
        name: 'Secret',
        ticker: 'SCRT',
        associatedTerms: ['Guy Zyskind'],
    },
    {
        name: 'DENT',
        ticker: 'DENT',
        associatedTerms: ['Tero Katajainen'],
    },

    {
        name: 'Civic',
        ticker: 'CVC',
        associatedTerms: ['Jonathan Smith', 'Vinny Lingham'],
    },
    {
        name: 'Stargate Finance',
        ticker: 'STG',
        associatedTerms: ['Stargate', 'LayerZero Labs', 'LayerZero'],
    },
    {
        name: 'Cocos-BCX',
        ticker: 'COMBO',
        associatedTerms: ['Kevin Charles', 'COMBO', 'COMBONETWORKIO'],
    },
    {
        name: 'FlokiInu',
        ticker: '1000FLOKI',
        associatedTerms: ['FLOKI', 'Matt Furie',],
    },
    {
        name: 'Pepe',
        ticker: '1000PEPE',
        associatedTerms: ['Frog', 'Elon Musk'],
    },
    {
        name: 'DeXe',
        ticker: 'DEXE',
        associatedTerms: ['Dmitriy Kotliarov'],
    },
    {
        name: 'Self Chain',
        ticker: 'FRONT',
        associatedTerms: ['Selfchainxyz', 'FrontierDotXYZ', 'Ravindra Kumar', 'Frontier'],
    },
    {
        name: 'Ren',
        ticker: 'REN',
        associatedTerms: ['Taiyang Zhang'],
    },
    {
        name: 'Voyager Token',
        ticker: 'VGX',
        associatedTerms: ['Voyager'],
    },
    {
        name: 'Polymesh',
        ticker: 'POLYX',
        associatedTerms: ['Stan Chernykhin'],
    },
    {
        name: 'Onotology Gas',
        ticker: 'ONG',
        associatedTerms: ['Jun LI'],
    },
    {
        name: 'Cartesi',
        ticker: 'CTSI',
        associatedTerms: ['Erick de Moura,', 'Augusto Teixeira,', 'Diego Nehab', 'Colin Steil'],
    },
    {
        name: 'Request Network',
        ticker: 'REQ',
        associatedTerms: ['Christophe Lassuyt'],
    },
    {
        name: 'Aragon',
        ticker: 'ANT',
        associatedTerms: ['Luis Ivan Cuende'],
    },
    {
        name: 'Galxe',
        ticker: 'Gal',
        associatedTerms: ['Charles Way', 'Harry Zhang', 'Xinlu C'],
    },
    {
        name: 'Hooked Protocol',
        ticker: 'HOOK',
        associatedTerms: ['Jason Y'],
    },
    {
        name: 'Radicle',
        ticker: 'RAD',
        associatedTerms: ['Alexis Sellier', 'Eleftherios Diakomichalis', 'Radwork'],
    },
    {
        name: 'Ardor',
        ticker: 'ARDOR',
        associatedTerms: ['Lior Yaffe'],
    },
    {
        name: 'PROMETEUS',
        ticker: 'PROM',
        associatedTerms: ['Vladislavs Semjonovs'],
    },
    {
        name: 'Bancor',
        ticker: 'BNT',
        associatedTerms: ['Galia Benartz'],
    },
    {
        name: 'Standard Tokenization Protocol',
        ticker: 'STPT',
        associatedTerms: ['Minhui Chen'],
    },
    {
        name: 'MOBOX',
        ticker: 'MBOX',
        associatedTerms: ['	Vadim Kot'],
    },
    {
        name: 'TrueFi',
        ticker: 'TRU',
        associatedTerms: ['Rafael Cosman', 'TrustToken'],
    },
    {
        name: 'COTI',
        ticker: 'COTI',
        associatedTerms: ['Shahaf Bar-Geffen'],
    },
    {
        name: 'PowerLedger',
        ticker: 'POWR',
        associatedTerms: ['Jemma Green', 'John Bulich', 'David Martin'],
    },
    {
        name: 'Metal',
        ticker: 'MTL',
        associatedTerms: ['Marshall Hayner', 'Metallicus'],
    },
    {
        name: 'Stratis',
        ticker: 'STRAX',
        associatedTerms: ['Chris Trew', 'stratisplatform'],
    },
    {
        name: 'VeThor Token',
        ticker: 'VTHO',
        associatedTerms: ['Sunny Lu'],
    },
    {
        name: 'BIGTIME',
        ticker: 'BIGTIME',
        associatedTerms: ['playbigtime', 'Ari Meilich'],
    },
    {
        name: 'Dusk Network',
        ticker: 'DUSK',
        associatedTerms: ['Jelle Pol', ' Emanuele Francioni'],
    },
    {
        name: 'Alpha Finance Lab',
        ticker: 'ALPHA',
        associatedTerms: ['Tascha Punyaneramitdee', 'Stella', 'stellaxyz_'],
    },
    {
        name: 'Everipedia',
        ticker: 'IQ',
        associatedTerms: ['Theodor Forselius'],
    },
    {
        name: 'WINkLink',
        ticker: 'WIN',
        associatedTerms: ['Lucia Wong '],
    },
    {
        name: 'Loom Network',
        ticker: 'LOOM',
        associatedTerms: ['James M. Duffy', 'Luke Zhang'],
    },
    {
        name: 'DODO',
        ticker: 'DODO',
        associatedTerms: ['Qi Wang'],
    },
    {
        name: 'NKN',
        ticker: 'NKN',
        associatedTerms: ['Yanbo Li', 'Bruce Li', 'Yilun Zhang'],
    },
    {
        name: 'Phala.Network',
        ticker: 'PHA',
        associatedTerms: ['Hang Yin'],
    },
    {
        name: 'Mdex',
        ticker: 'MDX',
        associatedTerms: ['Nate Flanders', 'Anant Handa'],
    },
    {
        name: 'Marlin',
        ticker: 'POND',
        associatedTerms: ['Siddhartha', 'Prateesh', 'Roshan'],
    },
    {
        name: 'Spell Token',
        ticker: 'SPELL',
        associatedTerms: ['Serkan Piantino', 'MIM_Spell'],
    },
    {
        name: 'QuarkChain',
        ticker: 'QKC',
        associatedTerms: ['Qi Zhou'],
    },
    {
        name: 'FunToken',
        ticker: 'FUN',
        associatedTerms: ['Adriaan Brink'],
    },
    {
        name: 'My Neighbor Alice',
        ticker: 'ALICE',
        associatedTerms: ['Anna Norrevik'],
    },
    {
        name: 'Venus',
        ticker: 'XVS',
        associatedTerms: ['Joselito Lizarondo'],
    },
    {
        name: 'Highstreet',
        ticker: 'HIGH',
        associatedTerms: ['Jenny Guo'],
    },
    {
        name: 'CertiK',
        ticker: 'CTK',
        associatedTerms: ['Ronghui Gu', 'Shentu'],
    },
    {
        name: 'Wrapped NXM',
        ticker: 'WNXM',
        associatedTerms: ['Hugh Karp'],
    },
    {
        name: 'Biswap',
        ticker: 'BSW',
        associatedTerms: ['Henrique Dubugras'],
    },
    {
        name: 'Alien Worlds',
        ticker: 'TLM',
        associatedTerms: ['Sarojini McKenna'],
    },
    {
        name: 'Acala Token',
        ticker: 'ACA',
        associatedTerms: ['Fuyao Jiang', 'Ruitao Su', 'Bette Chen', 'Bryan Chen'],
    },
    {
        name: 'WazirX',
        ticker: 'WRX',
        associatedTerms: ['Nischal Shetty'],
    },
    {
        name: 'SUN',
        ticker: 'SUN',
        associatedTerms: ['defi_sunio'],
    },
    {
        name: 'Orchid',
        ticker: 'OXT',
        associatedTerms: ['Steven Waterhouse', 'Jay Freeman', 'Brian J. Fox'],
    },
    {
        name: 'Reef',
        ticker: 'REEF',
        associatedTerms: ['Denko Mancheski'],
    },
    {
        name: 'Kepple',
        ticker: 'QLC',
        associatedTerms: ['Denko Mancheski'],
    },
    {
        name: 'OriginToken',
        ticker: 'OGN',
        associatedTerms: ['Josh Fraser', 'Matthew Liu', 'Origin Protocol'],
    },
    {
        name: 'Yield Guild Games',
        ticker: 'YGG',
        associatedTerms: ['Gabby Dizon'],
    },
    {
        name: 'Beta Finance',
        ticker: 'BETA',
        associatedTerms: ['Allen Lee'],
    },
    {
        name: 'Vai',
        ticker: 'VAI',
        associatedTerms: ['Vaiot'],
    },
    {
        name: 'Perpetual Protocol',
        ticker: 'PERP',
        associatedTerms: ['Yenfen Weng', 'hao Kang Lee'],
    },
    {
        name: 'StormX',
        ticker: 'STMX',
        associatedTerms: ['Simon Yu'],
    },
    {
        name: 'Automata',
        ticker: 'ATA',
        associatedTerms: ['Deli Gong'],
    },
    {
        name: 'Badger DAO',
        ticker: 'BADGER',
        associatedTerms: ['Chris Spadafora', 'Ameer Rosic', 'Albert Castellana', 'Alberto Cevallos'],
    },
    {
        name: 'Serum',
        ticker: 'SRM',
        associatedTerms: ['Sam Bankman Fried'],
    },
    {
        name: 'Tokocrypto',
        ticker: 'TKO',
        associatedTerms: ['Pang Kai '],
    },
    {
        name: 'Ark',
        ticker: 'ARK',
        associatedTerms: ['Cathie Wood'],
    },
    {
        name: 'Viction',
        ticker: 'VIC',
        associatedTerms: ['Long Vuong', 'TomoChain', 'Tomo'],
    },
    {
        name: 'IRISnet',
        ticker: 'IRIS',
        associatedTerms: ['Harriet Cao'],
    },
    {
        name: 'Wanchain',
        ticker: 'WAN',
        associatedTerms: ['Jack Lu'],
    },
    {
        name: 'Moonriver',
        ticker: 'MOVR',
        associatedTerms: ['Purestake', 'Moonbeam foundation'],
    },
    {
        name: 'Mines of Dalarnia',
        ticker: 'DAR',
        associatedTerms: ['Workinman Interactive'],
    },
    {
        name: 'Selfkey',
        ticker: 'KEY',
        associatedTerms: ['John Warmann '],
    },
    {
        name: 'Aergo',
        ticker: 'AERGO',
        associatedTerms: ['Phil Zamani'],
    },
    {
        name: 'Aavegotchi',
        ticker: 'GHST',
        associatedTerms: ['Coder Dan'],
    },
    {
        name: 'MovieBloc',
        ticker: 'MBL',
        associatedTerms: ['Peter Kim'],
    },
    {
        name: 'ARPA Chain',
        ticker: 'ARPA',
        associatedTerms: ['Felix Xu'],
    },
    {
        name: 'Ampleforth Governance Token',
        ticker: 'FORTH',
        associatedTerms: ['Evan Kuo', ' Brandon Iles', 'Ampleforth'],
    },
    {
        name: 'Orbs Network',
        ticker: 'ORBS',
        associatedTerms: ['orbs_network', 'Netta Korin'],
    },
    {
        name: 'Linear',
        ticker: 'LINA',
        associatedTerms: ['Kevin Tai', 'Drey Ng', 'LINAUSDT'],
    },
    {
        name: 'CORTEX',
        ticker: 'CTXC',
        associatedTerms: ['Ziqi Chen'],
    },
    {
        name: 'VERGE',
        ticker: 'XVG',
        associatedTerms: ['Justin Vendetta '],
    },
    {
        name: 'Ethernity Chain',
        ticker: 'ERN',
        associatedTerms: ['Nick Rose Ntertsas'],
    },
    {
        name: 'STP',
        ticker: 'STPT',
        associatedTerms: ['STP_Network', 'STP Network', ' Minhui Chen'],
    },
    {
        name: 'Utrust',
        ticker: 'UTK',
        associatedTerms: ['Sanja Kon'],
    },
    {
        name: 'SuperFarm',
        ticker: 'SUPER',
        associatedTerms: ['Eliot Wainman'],
    },
    {
        name: 'Gifto',
        ticker: 'GFT',
        associatedTerms: ['Mitch Chait', 'Jonas Hudson'],
    },
    {
        name: 'Alpaca Finance',
        ticker: 'ALPACA',
        associatedTerms: ['Hitoshi Harada'],
    },
    {
        name: 'Coin98',
        ticker: 'C98',
        associatedTerms: ['Thanh Le', 'Ninety Eight', 'ninetyeight_hq'],
    },
    {
        name: 'QuickSwap',
        ticker: 'QUICK',
        associatedTerms: ['Sameep Singhania'],
    },
    {
        name: 'Raydium',
        ticker: 'RAY',
        associatedTerms: ['Alpha Ray'],
    },
    {
        name: 'Measurable Data Token',
        ticker: 'MDT',
        associatedTerms: ['Heatherm Huang'],
    },
    {
        name: 'Phoenix',
        ticker: 'PHB',
        associatedTerms: ['Senthil Kumar'],
    },
    {
        name: 'LTO Network',
        ticker: 'LTO',
        associatedTerms: ['Rick Schmitz'],
    },
    {
        name: 'DFI.Money',
        ticker: 'YFII',
    },
    {
        name: 'Enzyme',
        ticker: 'MLN',
        associatedTerms: ['Mona El Isa'],
    },
    {
        name: 'Sandbox',
        ticker: 'SAND',
        associatedTerms: ['The Sandbox', 'Sébastien Borget', 'Animoca'],
    },
    {
        name: 'Flamingo',
        ticker: 'FLM',
        associatedTerms: [' Da Hongfei'],
    },
    {
        name: 'Polkastarter',
        ticker: 'POLS',
        associatedTerms: ['Daniel Stockhaus', 'Tiago Martins', 'Miguel Leite'],
    },
    {
        name: 'Virtua',
        ticker: 'VANRY',
        associatedTerms: ['Gary Bracey', 'Jawad Ashra', 'TVK', 'VANARCHAIN'],
    },
    {
        name: 'Litentry',
        ticker: 'LIT',
        associatedTerms: ['Hanwen Cheng'],
    },
    {
        name: 'Neutron',
        ticker: 'NTRN',
        associatedTerms: ['Avril Duthiel'],
    },
    {
        name: 'Hifi Finance',
        ticker: 'HIFI',
        associatedTerms: ['Mick Hagen'],
    },
    {
        name: 'Beefy.Finance',
        ticker: 'BIFI',
        associatedTerms: ['Dohyun Pak'],
    },
    {
        name: 'League of Kingdoms',
        ticker: 'LOKA',
        associatedTerms: ['Krishnan Sunderarajan '],
    },
    {
        name: 'FC Barcelona Fan Token Bar',
        ticker: 'BAR',
        associatedTerms: ['Barcelona'],
    },
    {
        name: 'Celestia',
        ticker: 'TIA',
        associatedTerms: ['Mustafa Al-Bassam', 'Ismail Khoffi'],
    },
    {
        name: 'Alchemix',
        ticker: 'ALCX',
        associatedTerms: ['Scoopy Trooples'],
    },
    {
        name: 'PIVX',
        ticker: 'PIVX',
        associatedTerms: ['James Burden'],
    },
    {
        name: 'dForce',
        ticker: 'DF',
        associatedTerms: ['Mindao YANG'],
    },
    {
        name: 'BakerySwap',
        ticker: 'BAKE',
        associatedTerms: ['BakeryToken'],
    },
    {
        name: 'IDEX',
        ticker: 'IDEX',
        associatedTerms: ['Alex Wearn'],
    },
    {
        name: 'Auction',
        ticker: 'AUCTION',
        associatedTerms: ['Bounce', 'Chandler Song', 'BounceBit'],
    },
    {
        name: 'DIA',
        ticker: 'DIA',
        associatedTerms: ['Paul Claudius'],
    },
    {
        name: 'NEOGas',
        ticker: 'GAS',
        associatedTerms: ['Da HongFei', 'Erik Zhang'],
    },
    {
        name: 'BitShares',
        ticker: 'BTS',
        associatedTerms: ['Dan Larimer'],
    },
    {
        name: 'SONM',
        ticker: 'SNM',
        associatedTerms: ['Alexei Antonov'],
    },
    {
        name: 'Keep3rV1',
        ticker: 'KP3R',
    },
    {
        name: 'openANX',
        ticker: 'OAX',
        associatedTerms: ['Hugh Madden', 'Dave Chapman', 'Claudia Lau', 'David Tee', 'Ken Lo'],
    },
    {
        name: 'Orion Protocol',
        ticker: 'ORN',
        associatedTerms: ['Orion', 'Alexey Koloskov'],
    },
    {
        name: 'BarnBridge',
        ticker: 'BOND',
        associatedTerms: ['BarnBridge'],
    },
    {
        name: 'Komodo',
        ticker: 'KMD',
        associatedTerms: ['James Lee'],
    },
    {
        name: 'Stafi',
        ticker: 'FIS',
        associatedTerms: ['Liam Young', 'Tore Zhang'],
    },
    {
        name: 'Travala',
        ticker: 'AVA',
        associatedTerms: ['Juan Otero', 'travalacom'],
    },
    {
        name: 'Troy',
        ticker: 'TROY',
        associatedTerms: ['Shihao Sun'],
    },
    {
        name: 'BENQI',
        ticker: 'QI',
        associatedTerms: ['Dan Mgbor'],
    },
    {
        name: 'Tranchess',
        ticker: 'CHESS',
        associatedTerms: ['Danny Chong'],
    },
    {
        name: 'REI Network',
        ticker: 'REI',
        associatedTerms: ['Alex Soares '],
    },
    {
        name: 'Bella Protocol',
        ticker: 'BEL',
        associatedTerms: ['Felix Xu'],
    },
    {
        name: 'Status Network',
        ticker: 'SNT',
        associatedTerms: ['ethstatus'],
    },
    {
        name: 'LeverFi',
        ticker: 'LEVER',
        associatedTerms: ['Lawrence Lim', 'Lawrence Lim'],
    },
    {
        name: 'Adventure Gold',
        ticker: 'AGLD',
        associatedTerms: ['Will Papper'],
    },
    {
        name: 'Clover Finance',
        ticker: 'CLV',
        associatedTerms: ['Norelle Ng'],
    },
    {
        name: 'Dego Finance',
        ticker: 'DEGO',
    },
    {
        name: 'Nuls',
        ticker: 'NULS',
        associatedTerms: ['Reaper Ran'],
    },
    {
        name: 'Contentos',
        ticker: 'COS',
        associatedTerms: ['Mick Tsai'],
    },
    {
        name: 'VIDT DAO',
        ticker: 'VIDT',
        associatedTerms: [' Marnix van den Berg', 'Pim Voets', 'Ceciel van Helden'],
    },
    {
        name: 'Voxies',
        ticker: 'VOXEL',
        associatedTerms: ['Erik Voorhees'],
    },
    {
        name: 'Manchester City Fan Token',
        ticker: 'CITY',
        associatedTerms: ['MAN CITY'],
    },
    {
        name: 'PARIS SAINT-GERMAIN Fan Token',
        ticker: 'PSG',
    },
    {
        name: 'Alphine F1 Team Fan Token',
        ticker: 'Alphine',
    },
    {
        name: 'Firo',
        ticker: 'FIRO',
        associatedTerms: ['Poramin Insom'],
    },
    {
        name: 'Ambire AdEx',
        ticker: 'ADX',
        associatedTerms: ['Ivo Georgiev'],
    },
    {
        name: 'Fio Protocol',
        ticker: 'FIO',
        associatedTerms: ['David Gold'],
    },
    {
        name: 'Tellor',
        ticker: 'TRB',
        associatedTerms: ['Brenda Loya', ' Micheal Zemrose', 'Nicholas Fett', 'Tellor'],
    },
    {
        name: 'Unifi Protocol DAO',
        ticker: 'UNFI',
        associatedTerms: ['Juliun Brabon'],
    },
    {
        name: 'Harvest Finance',
        ticker: 'FARM',
        associatedTerms: ['Chal Daniels', 'harvest_finance'],
    },
    {
        name: 'Cream Finance',
        ticker: 'CREAM',
        associatedTerms: ['Jeffrey Huang'],
    },
    {
        name: 'Lazio Fan Token',
        ticker: 'LAZIO',
    },
    {
        name: 'DREP',
        ticker: 'DREP',
        associatedTerms: ['Xiaolong Xu'],
    },
    {
        name: 'VITE',
        ticker: 'VITE',
        associatedTerms: ['Charles Liu'],
    },

    {
        name: 'BurgerCities',
        ticker: 'BURGER',
        associatedTerms: ['Burger City'],
    },
    {
        name: 'MANTRA',
        ticker: 'OM',
        associatedTerms: ['John Patrick Mullin'],
    },
    {
        name: 'Neblio',
        ticker: 'NEBL',
        associatedTerms: ['Eddy Smith'],
    },
    {
        name: 'AirDAO',
        ticker: 'AMB',
        associatedTerms: ['Lang Mei'],
    },
    {
        name: 'Ellipsis',
        ticker: 'EPX',
        associatedTerms: ['Ajay Chakravarthy'],
    },
    {
        name: 'Wing Token',
        ticker: 'WING',
        associatedTerms: ['Sebastian Stupurac', 'Stas Oskin', 'Dominik Zynis', 'Boris Povod', 'Serguei Popov'],
    },
    {
        name: 'Santos FC Fan Token',
        ticker: 'SANTOS',
    },
    {
        name: 'AirSwap',
        ticker: 'AST',
        associatedTerms: ['Michael Oved', 'Sam Tabar', 'Don Mosites'],
    },
    {
        name: 'Perlin',
        ticker: 'PERL',
        associatedTerms: ['Dorjee Sun'],
    },
    {
        name: 'DOCK',
        ticker: 'DOCK',
        associatedTerms: ['Nick Lambert'],
    },
    {
        name: 'FC Porto Fan Token',
        ticker: 'PORTO',
    },
    {
        name: 'Bonfida',
        ticker: 'FIDA',
        associatedTerms: ['David Ratiney'],
    },
    {
        name: 'OokiDAO',
        ticker: 'OOKI',
        associatedTerms: ['Tom Bean'],
    },
    {
        name: 'AUTO',
        ticker: 'AUTO',
        associatedTerms: ['Mildgiraffe,', 'AUTOFARM'],
    },
    {
        name: 'Walton',
        ticker: 'WTC',
        associatedTerms: ['Xu Fengcheng'],
    },
    {
        name: 'pNetwork',
        ticker: 'PNT',
        associatedTerms: ['Provable Things '],
    },
    {
        name: 'Prosper',
        ticker: 'PROS',
        associatedTerms: ['Vladislavs Semjonovs'],
    },
    {
        name: 'PowerPool',
        ticker: 'CVP',
        associatedTerms: ['LeeRoy Oshiya'],
    },
    {
        name: 'UniLend',
        ticker: 'UFT',
        associatedTerms: ['Chandresh Aharwar'],
    },
    {
        name: 'AC Milan Fan Token',
        ticker: 'ACM',
    },
    {
        name: 'Juventus Fan Token',
        ticker: 'Juv',
        associatedTerms: ['Juventus'],
    },
    {
        name: 'Tornado Cash',
        ticker: 'TORN',
        associatedTerms: ['Roman Storm', 'Roman Semenov', 'Alex Pertsev'],
    },
    {
        name: 'Vulcan Forged',
        ticker: 'PYR',
        associatedTerms: ['Jamie Thomson'],
    },
    {
        name: 'FOOTBALL',
        ticker: 'FOOTBALL',
    },
    {
        name: 'MEMELAND',
        ticker: 'MEME',
    },
    {
        name: 'Tokenfi',
        ticker: 'TOKEN',
    },
    {
        name: 'Ordinals',
        ticker: 'ORDI',
        associatedTerms: ['Ordinals', 'BRC-20'],
    },
    {
        name: 'Jito',
        ticker: 'JTO',
        associatedTerms: ['Jito Labs', 'Lucas Bruder'],
    },
    {
        name: 'Ordinals',
        ticker: '1000SATS',
        associatedTerms: ['SATS'],
    },
    {
        name: 'RATS',
        ticker: '1000RATS',
        associatedTerms: ['RATSCOIN'],
    },
    {
        name: 'Kaspa',
        ticker: 'KAS',
        associatedTerms: ['Yonatan Sompolinsky', 'Kaspa Currency'],
    },
    {
        name: 'EthereumPoW',
        ticker: 'ETHW',
    },
    {
        name: 'Fusionist',
        ticker: 'ACE',
    },
    {
        name: 'NFPrompt',
        ticker: 'NFP',
        associatedTerms: ['Reni Dimitrova'],
    },
    {
        name: 'Manta Network',
        ticker: 'MANTA',
        associatedTerms: ['Kenny Li'],
    },
    {
        name: 'XAI',
        ticker: 'XAI',
    },
    {
        name: 'Dogwifhat',
        ticker: 'WIF',
    },
    {
        name: 'Akropolis',
        ticker: 'AKRO',
        associatedTerms: ['Anastasia Andrianova', ' Kate Kurbanova'],
    },
    {
        name: 'Ondo Finance',
        ticker: 'ONDO',
        associatedTerms: ['Nathan Allman'],
    },
    {
        name: 'AltLayer',
        ticker: 'ALT',
        associatedTerms: ['alt_layer', 'Jia Yaoqi'],
    },
    {
        name: 'Jupiter',
        ticker: 'JUP',
        associatedTerms: ['Meow'],
    },
    {
        name: 'ZetaChain',
        ticker: 'ZETA',
        associatedTerms: ['Ankur Nandwani'],
    },
    {
        name: 'Ronin',
        ticker: 'RONIN',
        associatedTerms: ['RON', 'Sky Mavis', 'Axie Infinity'],
    },
    {
        name: 'Dymension',
        ticker: 'DYM',
        associatedTerms: ['Yishay Harel'],
    },
    // Add more cryptocurrencies here
];
//I LEFT OUT "DATA", "JST", "Hard", "FOR", "T"
export default cryptoList;


