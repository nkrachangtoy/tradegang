# TradeGang

## Tech stacks

- React native
- Expo
- Firebase(Authentication)

## App Description

Each team must build a mobile mock trading app that allows users to “Buy” and “Sell” stocks within a fake “Portfolio”. There are a number of online services available to monitor a company’s fundamentals and the technical indicators for a given stock so we will not invest in adding these features at this time.

## UX/UI Prototype

![Figma prototype](https://i.imgur.com/bzuzj40.png)

## Milestones

### Milestone 1

- [x] Authentication (Register, Login, Logout)
- [x] Consume a Stock Price API (finnhub.io)
- [x] Search and display the current stock price for a given symbol
- [x] User Interface
- [x] Register/Login Screen
- [x] Search/Quote Screen
- [x] Navigation link to Log Out

### Milestone 2

- [x] Create and consume a user “portfolio” API (single currency)
- [ ] Create a user’s “Cash” (each user to start with $50,000)
- [x] Perform a “market buy”
  - Create a record for {user, symbol, quotePrice, numShares}
  - Update Cash by subtracting quotePrice x numShares
- [x] Perform a “market sell” (same as a buy but numShares should be negative and thus Cash should increase)
- [x] User Interface
  - Buy/Sell Links on the Search/Quote Screen
  - Buy/Sell Screen

### Milestone 3

- [x] Display “Portfolio Positions” (each position is the sum of the numShares for a given user and symbol, the average price per share
- [ ] Display the current price per share, and the profit/loss which is the difference between the average price multiplied by shares held and current price multiplied by shares held).
- [ ] Display “Portfolio Value” = Cash plus the sums of each position currentPrice multiplied by shares held)
- [x] User Interface
  - Portfolio Screen (Display Cash, List of Positions…with Buy/Sell Links, and Portfolio Value)
  - Navigation links to view Portfolio or Search/Quote Screen

### Milestone 4

- [x] Add “Stock Watchlist”
- [x] User Interface
  - Add an icon by stock symbols on the Search/Quote Screen to add/remove from watchlist.
  - Display the watched symbols on the Search/Quote Screen when not displaying a search result.
  - Link to search result screen for a stock when user clicks on a symbol in the Portfolio Screen or the Watchlist.

### Milestone 5

- [ ] Add performance Charts (price over time) Line chart on the
- [ ] User Interface
  - Line chart on Portfolio screen to display Portfolio Value over time (Week, Month, 3-Month, 6-Month, 12-Month, All Time)
  - Line chart on Search/Quote Screen for search result

## Resources

- Stock API ([finnhub.io](https://www.finnhub.io))

## To view this application

```
git clone <this repo>

npm install

npm start
```
