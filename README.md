# EVI
## Easy Value Investing

### Resources:
- #### Svelte
	- [SvelteKit build directory](https://stackoverflow.com/questions/77241807/how-to-change-the-build-directory-in-sveltekit)

- #### Stock market API
	- [FMP](https://site.financialmodelingprep.com)
	- [FMP github](https://github.com/FinancialModelingPrepAPI/Financial-Modeling-Prep-API)
	- [alpha vantage](https://www.alphavantage.co/documentation/)

- #### ETORO's LIST OF INSTRUMENTS 
	- 7k+ entries [nhymxu](https://app.nhymxu.com/etoro/)
	- 4k entries [etorostatic](https://etoro-cdn.etorostatic.com/e-marketing/AUM/FulllistofavailableStocksoneToro.pdf)


### KEY METRICS:
	yearly sales
	total assets
	total liabilities
	dividends
	earnings
	earning growth
	market cap
	pe ratio
	current ration
	price per share
	net working capital
	
	current normal earnings + expected annual growth = value, margin of safety


### checkout
	- [measure business risk with python](https://site.financialmodelingprep.com/developer/docs/blog/what-is-business-risk-and-how-to-measure-it-with-python)


### Structure
-------------

- general news [1.]

#### commodities
- chart 
- sentiment

#### cryptocurrencies
- chart [5.]
- analysis
- overview

#### currencies
- chart
- sentiment

#### etf
- chart
- overview
- list of stocks

#### indices
- chart
- sentiment

#### stocks
- chart [7.]
- analysis
- overview [6.] [9.]
- financial statement
	- income statement [2.]
	- balance sheet [3.]
	- cashflow statement [4.]


### API CALLS
1. https://financialmodelingprep.com/api/v3/fmp/articles?page=0&size=5
	> News - FMP Articles

2. https://financialmodelingprep.com/api/v3/income-statement/AAPL?period=annual
	> Financial statement - income statement

3. https://financialmodelingprep.com/api/v3/balance-sheet-statement/AAPL?period=annual
	> Financial statement - balance sheet

4. https://financialmodelingprep.com/api/v3/cash-flow-statement/AAPL?period=annual
	> Financial statement - cashflow statement

5. https://financialmodelingprep.com/api/v3/historical-price-full/BTCUSD
	> Crypto - Cryptocurrency Daily

6. https://financialmodelingprep.com/api/v3/profile/AAPL
	> Company Information - Company profile

7. https://financialmodelingprep.com/api/v3/historical-price-full/AAPL
	> Charts - Daily Chart EOD

8. https://financialmodelingprep.com/api/v3/historical-price-full/EURUSD
	> Forex - Forex Daily

9. https://financialmodelingprep.com/api/v3/symbol/NASDAQ
	> Stock List - Exchange Symbols
