import { useState, useEffect } from "react";

const BASE_URL = "https://api.binance.com/";
// let ws = new WebSocket("wss://stream.binance.com:9443/ws/etheur@trade");

const BitcoinQuery = "api/v3/ticker/price?symbol=BTCUSDT";

const exchangeRate = document.getElementById("rate");
const exchangeCurrency = document.getElementById("currency");

const exchangeData = document.getElementById("title");

const Bitcoin = document.getElementById("bitcoin");
Bitcoin.addEventListener("click", onBitcoinClick);

const Ethereum = document.getElementById("Ethereum");
Ethereum.addEventListener("click", onEthereumClick);

const TRC20 = document.getElementById("TRC20");
// TRC20.addEventListener("click", onTRC20lick);

const ERC20 = document.getElementById("ERC20");
// ERC20.addEventListener("click", onERC20Click);

const USD = document.getElementById("USD");
USD.addEventListener("click", onUSDClick);

const EUR = document.getElementById("EUR");
// EUR.addEventListener("click", onEURClick);

const PLN = document.getElementById("PLN");
// PLN.addEventListener("click", onPLNClick);

function onBitcoinClick(event) {
  event.preventDefault();
  exchangeData.innerHTML = "1 Bitcoin = " + "  EUR";
}
function onEthereumClick(event) {
  event.preventDefault();
  exchangeData.innerHTML = "1 Ethereum = " + "  EUR";

  // ws.onclose;
  // ws.onmessage = (event) => {
  //   const stockObject = JSON.parse(event.data);

  // };
}
function onUSDClick(event) {
  event.preventDefault();

  // ws.onclose;
  // ws.onmessage = (event) => {
  //   const stockObject = JSON.parse(event.data);

  // };
}
