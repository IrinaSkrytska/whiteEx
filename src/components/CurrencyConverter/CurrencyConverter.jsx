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

// const API_KEY = 'b9474da3d7b64496bd5be9a5519204ba';

export function CurrencyConverter() {
  const [fromCurrency, setFromCurrency] = useState('BTC');
  const [toCurrency, setToCurrency] = useState('USD');
  const [fromPrice, setFromPrice] = useState('');
  const [toPrice, setToPrice] = useState('');
  const [rates, setRates] = useState();

  useEffect(() => {
    if (fromCurrency === 'BTC' && toCurrency === 'USD') {
      fetch('https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT').then(
        res =>
          res.json().then(json => {
            setRates(json.price);
            console.log(json.price);
          })
      );
    }
    if (fromCurrency === 'BTC' && toCurrency === 'EUR') {
      fetch('https://api.binance.com/api/v3/avgPrice?symbol=BTCEUR').then(res =>
        res.json().then(json => {
          setRates(json.price);
          console.log(json.price);
        })
      );
    }
    if (fromCurrency === 'BTC' && toCurrency === 'PLN') {
      fetch('https://api.binance.com/api/v3/avgPrice?symbol=BTCPLN').then(res =>
        res.json().then(json => {
          setRates(json.price);
          console.log(json.price);
        })
      );
    }
    if (fromCurrency === 'USD' && toCurrency === 'BTC') {
      fetch(
        `https://api.exchangerate.host/convert?from=${fromCurrency}&to=${toCurrency}`
      ).then(res =>
        res.json().then(json => {
          setRates(json.result);
          console.log(json.result);
        })
      );
    }
    if (fromCurrency === 'EUR' && toCurrency === 'BTC') {
      fetch(
        `https://api.exchangerate.host/convert?from=${fromCurrency}&to=${toCurrency}`
      ).then(res =>
        res.json().then(json => {
          setRates(json.result);
          console.log(json.result);
        })
      );
    }
    if (fromCurrency === 'PLN' && toCurrency === 'BTC') {
      fetch(
        `https://api.exchangerate.host/convert?from=${fromCurrency}&to=${toCurrency}`
      ).then(res =>
        res.json().then(json => {
          setRates(json.result);
          console.log(json.result);
        })
      );
    }
    if (fromCurrency === 'ETH' && toCurrency === 'USD') {
      fetch('https://api.binance.com/api/v3/avgPrice?symbol=ETHUSDT').then(
        res =>
          res.json().then(json => {
            setRates(json.price);
            console.log(json.price);
          })
      );
    }
    if (fromCurrency === 'ETH' && toCurrency === 'EUR') {
      fetch('https://api.binance.com/api/v3/avgPrice?symbol=ETHEUR').then(res =>
        res.json().then(json => {
          setRates(json.price);
          console.log(json.price);
        })
      );
    }
    if (fromCurrency === 'ETH' && toCurrency === 'PLN') {
      fetch('https://api.binance.com/api/v3/avgPrice?symbol=ETHPLN').then(res =>
        res.json().then(json => {
          setRates(json.price);
          console.log(json.price);
        })
      );
    }
    if (fromCurrency === 'USD' && toCurrency === 'ETH') {
      fetch(
        'https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=ETH'
      ).then(res =>
        res.json().then(json => {
          setRates(json.ETH);
          console.log(json.ETH);
        })
      );
    }
    if (fromCurrency === 'EUR' && toCurrency === 'ETH') {
      fetch(
        'https://min-api.cryptocompare.com/data/price?fsym=EUR&tsyms=ETH'
      ).then(res =>
        res.json().then(json => {
          setRates(json.ETH);
          console.log(json.ETH);
        })
      );
    }
    if (fromCurrency === 'PLN' && toCurrency === 'ETH') {
      fetch(
        'https://min-api.cryptocompare.com/data/price?fsym=PLN&tsyms=ETH'
      ).then(res =>
        res.json().then(json => {
          setRates(json.ETH);
          console.log(json.ETH);
        })
      );
    }
    if (fromCurrency === 'tether' && toCurrency === 'USD') {
      fetch(
        'https://min-api.cryptocompare.com/data/price?fsym=USDT&tsyms=USD'
      ).then(res =>
        res.json().then(json => {
          setRates(json.USD);
          console.log(json.USD);
        })
      );
    }
    if (fromCurrency === 'tether' && toCurrency === 'EUR') {
      fetch(
        'https://min-api.cryptocompare.com/data/price?fsym=USDT&tsyms=EUR'
      ).then(res =>
        res.json().then(json => {
          setRates(json.EUR);
          console.log(json.EUR);
        })
      );
    }
    if (fromCurrency === 'tether' && toCurrency === 'PLN') {
      fetch(
        'https://min-api.cryptocompare.com/data/price?fsym=USDT&tsyms=PLN'
      ).then(res =>
        res.json().then(json => {
          setRates(json.PLN);
          console.log(json.PLN);
        })
      );
    }
    if (fromCurrency === 'USD' && toCurrency === 'tether') {
      fetch(
        'https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=USDT'
      ).then(res =>
        res.json().then(json => {
          setRates(json.USDT);
          console.log(json.USDT);
        })
      );
    }
    if (fromCurrency === 'EUR' && toCurrency === 'tether') {
      fetch(
        'https://min-api.cryptocompare.com/data/price?fsym=EUR&tsyms=USDT'
      ).then(res =>
        res.json().then(json => {
          setRates(json.USDT);
          console.log(json.USDT);
        })
      );
    }
    if (fromCurrency === 'PLN' && toCurrency === 'tether') {
      fetch(
        'https://min-api.cryptocompare.com/data/price?fsym=PLN&tsyms=USDT'
      ).then(res =>
        res.json().then(json => {
          setRates(json.USDT);
          console.log(json.USDT);
        })
      );
    }
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

  return (
    <div className={css.wrapper}>
      <Block
        currencyFrom={fromCurrency}
        onChangeCurrencyFrom={setFromCurrency}
        currencyTo={toCurrency}
        onChangeCurrencyTo={setToCurrency}
      />
      <div className={css.exchange__rate__thumb}>
        <p className={css.title}>Курс на данный момент: {rates}</p>
        <ul className={css.exchange__rate}>
          <ConvertFrom value={fromPrice} onChangeValue={onChangeFromPrice} />
          <ConvertTo value={toPrice} onChangeValue={onChangeToPrice} />
        </ul>
      </div>
    </div>
  );
}

export default CurrencyConverter;
