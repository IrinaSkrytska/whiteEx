import css from './CurrencyConverter.module.css';
import { useState, useEffect } from 'react';

import Block from '../Block';
import BlockGet from 'components/BlockGet';
import ConvertFrom from '../ConvertFrom';
import ConvertTo from 'components/ConvertTo';

// До 1.000$ - 2, 5 %
// Від 1.000$ до 5.000$ - 2%
// Від 5.000$ до 10.000$ - 1,5%
//   Від 10.000$ - 1 %

// function Comission() {
//   if (amount < 1000) {
//    const comissionAmount = price * 0.025;
//    const finalSum = sum + comissionAmount;
//   } else if (amount) {
//     price * 0.02;
//   } else if (amount) {
//     price * 0.015;
//   } else {
//     price * 0.01;
//   }
// }

// function onBitcoinClickUSD(event) {
//   event.preventDefault();
//   fetch('https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT').then(r =>
//     r.json().then(j => console.log(parseFloat(j.price).toFixed(2)))
//   );
// }

// function onBitcoinClickEUR(event) {
//   event.preventDefault();
//   fetch('https://api.binance.com/api/v3/avgPrice?symbol=BTCEUR').then(r =>
//     r.json().then(j => console.log(parseFloat(j.price).toFixed(2)))
//   );
// }
// function onBitcoinClickPLN(event) {
//   event.preventDefault();
//   fetch('https://api.binance.com/api/v3/avgPrice?symbol=BTCPLN').then(r =>
//     r.json().then(j => console.log(parseFloat(j.price).toFixed(2)))
//   );
// }
// function onEthereumClickUSD(event) {
//   event.preventDefault();
//   fetch('https://api.binance.com/api/v3/avgPrice?symbol=ETHUSDT').then(r =>
//     r.json().then(j => console.log(parseFloat(j.price).toFixed(2)))
//   );
// }

// function onEthereumClickEUR(event) {
//   event.preventDefault();
//   fetch('https://api.binance.com/api/v3/avgPrice?symbol=ETHEUR').then(r =>
//     r.json().then(j => console.log(parseFloat(j.price).toFixed(2)))
//   );
// }
// function onEthereumClickPLN(event) {
//   event.preventDefault();
//   fetch('https://api.binance.com/api/v3/avgPrice?symbol=ETHPLN').then(r =>
//     r.json().then(j => console.log(parseFloat(j.price).toFixed(2)))
//   );
// }

// function onTRC20ClickUSD(event) {
//   event.preventDefault();
//   const data = fetch(
//     'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=tether'
//   ).then(r => r.json().then(data => console.log(data[0].current_price)));
// }
// function onTRC20ClickEUR(event) {
//   event.preventDefault();
//   const data = fetch(
//     'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=tether'
//   ).then(r => r.json().then(data => console.log(data[0].current_price)));
// }
// function onTRC20ClickPLN(event) {
//   event.preventDefault();
//   const data = fetch(
//     'https://api.coingecko.com/api/v3/coins/markets?vs_currency=pln&ids=tether'
//   ).then(r => r.json().then(data => console.log(data[0].current_price)));
// }

// function onERC20ClickUSD(event) {
//   event.preventDefault();
//   const data = fetch(
//     'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=tether'
//   ).then(r => r.json().then(data => console.log(data[0].current_price)));
// }

// function onGiveInputClick(event) {
//   event.preventDefault();
// }
const API_KEY = '4379F015-D80E-46F9-ADDC-43CDF1DF4CEC';

export function CurrencyConverter() {
  const [fromCurrency, setFromCurrency] = useState('BTC');
  const [toCurrency, setToCurrency] = useState('USD');
  const [fromPrice, setFromPrice] = useState('0');
  const [toPrice, setToPrice] = useState('0');
  const [rates, setRates] = useState();

  useEffect(() => {
    fetch(
      `https://rest.coinapi.io/v1/exchangerate/${fromCurrency}/${toCurrency}?apikey=${API_KEY}`
    ).then(res =>
      res.json().then(json => {
        setRates(json.rate);
        console.log(json.rate);
      })
    );
  }, [fromCurrency, toCurrency]);

  const onChangeFromPrice = value => {
    const price = rates;
    console.log(price);
    const result = value * rates;
    console.log(result);
    setToPrice(result);
    setFromPrice(value);
  };

  const onChangeToPrice = value => {
    setToPrice(value);
  };
  console.log(fromCurrency);
  return (
    <div className={css.wrapper}>
      <Block currency={fromCurrency} onChangeCurrency={setFromCurrency} />
      <BlockGet currency={toCurrency} onChangeCurrency={setToCurrency} />
      <div className={css.exchange__rate__thumb}>
        <div className={css.title}>Курс на данный момент</div>
        <ul className={css.exchange__rate}>
          <ConvertFrom value={fromPrice} onChangeValue={onChangeFromPrice} />
          <ConvertTo value={toPrice} onChangeValue={onChangeToPrice} />
        </ul>
      </div>
    </div>
  );
}

export default CurrencyConverter;
