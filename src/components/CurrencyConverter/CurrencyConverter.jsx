import css from './CurrencyConverter.module.css';
import { useState, useEffect } from 'react';

import Block from '../Block';
import ConvertFrom from '../ConvertFrom';
import ConvertTo from 'components/ConvertTo';

export function CurrencyConverter() {
  const [fromCurrency, setFromCurrency] = useState('bitcoin');
  const [toCurrency, setToCurrency] = useState('usd');
  const [fromPrice, setFromPrice] = useState('');
  const [toPrice, setToPrice] = useState('');
  const [rates, setRates] = useState();
  const [comission, setComission] = useState('');
  const [comissionFee, setComissionFee] = useState('');

  useEffect(() => {
    setFromPrice('');
    setToPrice('');

    if (fromCurrency === 'bitcoin' && toCurrency === 'usd') {
      fetch('https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT').then(
        res =>
          res.json().then(json => {
            console.log(json.price);
            const roundedRates = Math.round(json.price);
            setRates(roundedRates);
          })
      );
    }
    if (fromCurrency === 'bitcoin' && toCurrency === 'EUR') {
      fetch('https://api.binance.com/api/v3/avgPrice?symbol=BTCEUR').then(res =>
        res.json().then(json => {
          console.log(json.price);
          const roundedRates = Math.round(json.price);
          setRates(roundedRates);
        })
      );
    }
    if (fromCurrency === 'bitcoin' && toCurrency === 'pln') {
      fetch('https://api.binance.com/api/v3/avgPrice?symbol=BTCPLN').then(res =>
        res.json().then(json => {
          console.log(json.price);
          const roundedRates = Math.round(json.price);
          setRates(roundedRates);
        })
      );
    }
    if (fromCurrency === 'usd' && toCurrency === 'bitcoin') {
      fetch(`https://api.exchangerate.host/convert?from=USD&to=BTC`).then(res =>
        res.json().then(json => {
          console.log(json.result);
          const roundedRates = Math.round(json.result);
          setRates(roundedRates);
        })
      );
    }
    if (fromCurrency === 'EUR' && toCurrency === 'bitcoin') {
      fetch(
        `https://api.exchangerate.host/convert?from=${fromCurrency}&to=BTC`
      ).then(res =>
        res.json().then(json => {
          console.log(json.result);
          setRates(json.result);
        })
      );
    }
    if (fromCurrency === 'pln' && toCurrency === 'bitcoin') {
      fetch(`https://api.exchangerate.host/convert?from=PLN&to=BTC`).then(res =>
        res.json().then(json => {
          console.log(json.result);

          setRates(json.result);
        })
      );
    }
    if (fromCurrency === 'ethereum' && toCurrency === 'usd') {
      fetch('https://api.binance.com/api/v3/avgPrice?symbol=ETHUSDT').then(
        res =>
          res.json().then(json => {
            console.log(json.price);
            const roundedRates = Math.round(json.price);
            setRates(roundedRates);
          })
      );
    }
    if (fromCurrency === 'ethereum' && toCurrency === 'EUR') {
      fetch('https://api.binance.com/api/v3/avgPrice?symbol=ETHEUR').then(res =>
        res.json().then(json => {
          console.log(json.price);
          const roundedRates = Math.round(json.price);
          setRates(roundedRates);
        })
      );
    }
    if (fromCurrency === 'ethereum' && toCurrency === 'pln') {
      fetch('https://api.binance.com/api/v3/avgPrice?symbol=ETHPLN').then(res =>
        res.json().then(json => {
          console.log(json.price);
          const roundedRates = Math.round(json.price);
          setRates(roundedRates);
        })
      );
    }
    if (fromCurrency === 'usd' && toCurrency === 'ethereum') {
      fetch(
        'https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=ETH'
      ).then(res =>
        res.json().then(json => {
          console.log(json.ETH);
          setRates(json.ETH);
        })
      );
    }
    if (fromCurrency === 'EUR' && toCurrency === 'ethereum') {
      fetch(
        'https://min-api.cryptocompare.com/data/price?fsym=EUR&tsyms=ETH'
      ).then(res =>
        res.json().then(json => {
          console.log(json.ETH);
          setRates(json.ETH);
        })
      );
    }
    if (fromCurrency === 'pln' && toCurrency === 'ethereum') {
      fetch(
        'https://min-api.cryptocompare.com/data/price?fsym=PLN&tsyms=ETH'
      ).then(res =>
        res.json().then(json => {
          console.log(json.ETH);
          setRates(json.ETH);
        })
      );
    }
    if (fromCurrency === 'tether' && toCurrency === 'usd') {
      fetch(
        'https://min-api.cryptocompare.com/data/price?fsym=USDT&tsyms=USD'
      ).then(res =>
        res.json().then(json => {
          console.log(json.USD);
          const roundedRates = Math.round(json.USD);
          setRates(roundedRates);
        })
      );
    }
    if (fromCurrency === 'tether' && toCurrency === 'EUR') {
      fetch(
        'https://min-api.cryptocompare.com/data/price?fsym=USDT&tsyms=EUR'
      ).then(res =>
        res.json().then(json => {
          console.log(json.EUR);
          const roundedRates = Math.round(json.EUR);
          setRates(roundedRates);
        })
      );
    }
    if (fromCurrency === 'tether' && toCurrency === 'pln') {
      fetch(
        'https://min-api.cryptocompare.com/data/price?fsym=USDT&tsyms=PLN'
      ).then(res =>
        res.json().then(json => {
          console.log(json.PLN);
          const roundedRates = Math.round(json.PLN);
          setRates(roundedRates);
        })
      );
    }
    if (fromCurrency === 'usd' && toCurrency === 'tether') {
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
          console.log(json.USDT);
          setRates(json.USDT);
        })
      );
    }
    if (fromCurrency === 'pln' && toCurrency === 'tether') {
      fetch(
        'https://min-api.cryptocompare.com/data/price?fsym=PLN&tsyms=USDT'
      ).then(res =>
        res.json().then(json => {
          console.log(json.USDT);

          setRates(json.USDT);
        })
      );
    }
    if (
      fromCurrency === 'bitcoin' ||
      fromCurrency === 'ethereum' ||
      fromCurrency === 'tether'
    ) {
      fetch(`https://api.coincap.io/v2/rates/${fromCurrency}`).then(res =>
        res.json().then(json => {
          console.log(json.data.rateUsd);
          const roundedComission = Math.round(json.data.rateUsd);
          setComission(roundedComission);
        })
      );
    }
    if (toCurrency === 'bitcoin') {
      fetch(
        `https://api.exchangerate.host/convert?from=${fromCurrency}&to=BTC`
      ).then(res =>
        res.json().then(json => {
          setComission(json.result);
          console.log(json.result);
        })
      );
    }
    if (
      fromCurrency === 'usd' ||
      fromCurrency === 'EUR' ||
      (fromCurrency === 'pln' && toCurrency === 'ethereum')
    ) {
      fetch(
        `https://min-api.cryptocompare.com/data/price?fsym=${fromCurrency}&tsyms=ETH`
      ).then(res =>
        res.json().then(json => {
          setComission(json.ETH);
          console.log(json.ETH);
        })
      );
    }
    if (
      fromCurrency === 'usd' ||
      fromCurrency === 'EUR' ||
      (fromCurrency === 'pln' && toCurrency === 'tether')
    ) {
      fetch(
        `https://min-api.cryptocompare.com/data/price?fsym=${fromCurrency}&tsyms=USDT`
      ).then(res =>
        res.json().then(json => {
          setComission(json.USDT);
          console.log(json.USDT);
        })
      );
    }
    setComissionFee('');
  }, [fromCurrency, toCurrency, rates]);

  const onChangeFromPrice = value => {
    const priceWithComission = comission * value;
    console.log(priceWithComission);

    if (priceWithComission < 1000) {
      const comissionAmount = priceWithComission * 0.025;
      console.log(comissionAmount);

      const result = value * rates - comissionAmount;
      console.log(result);

      setComissionFee(comissionAmount);
      setToPrice(result);
      setFromPrice(value);
    }

    if (priceWithComission >= 1000 && priceWithComission < 5000) {
      const comissionAmount = Math.round(priceWithComission * 0.02);
      console.log(comissionAmount);

      const result = value * rates - comissionAmount;
      console.log(result);

      setComissionFee(comissionAmount);
      setToPrice(result);
      setFromPrice(value);
    }

    if (priceWithComission >= 5000 && priceWithComission < 10000) {
      const comissionAmount = Math.round(priceWithComission * 0.015);
      console.log(comissionAmount);

      const result = value * rates - comissionAmount;
      console.log(result);

      setComissionFee(comissionAmount);
      setToPrice(result);
      setFromPrice(value);
    }

    if (priceWithComission >= 10000) {
      const comissionAmount = Math.round(priceWithComission * 0.01);
      console.log(Math.round(comissionAmount));

      const result = value * rates - comissionAmount;
      console.log(result);

      setComissionFee(comissionAmount);
      setToPrice(result);
      setFromPrice(value);
    }
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
        <p className={css.title}>Комиссия: {comissionFee}</p>
        <ul className={css.exchange__rate}>
          <ConvertFrom value={fromPrice} onChangeValue={onChangeFromPrice} />
          <ConvertTo value={toPrice} onChangeValue={onChangeToPrice} />
        </ul>
      </div>
    </div>
  );
}

export default CurrencyConverter;
