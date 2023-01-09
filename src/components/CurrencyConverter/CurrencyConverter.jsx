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
  const [fromCurrency, setFromCurrency] = useState('btc');
  const [toCurrency, setToCurrency] = useState('usd');
  const [fromPrice, setFromPrice] = useState('');
  const [toPrice, setToPrice] = useState('');
  const [rates, setRates] = useState();

  useEffect(() => {
    fetch(
      `https://api.exchangerate.host/convert?from=${fromCurrency}&to=${toCurrency}`
    ).then(res =>
      res.json().then(json => {
        setRates(json.result);
        console.log(json.result);
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

  return (
    <div className={css.wrapper}>
      <Block currency={fromCurrency} onChangeCurrency={setFromCurrency} />
      <BlockGet currency={toCurrency} onChangeCurrency={setToCurrency} />
      <div className={css.exchange__rate__thumb}>
        <div className={css.title}>Курс на данный момент: {rates}</div>
        <ul className={css.exchange__rate}>
          <ConvertFrom value={fromPrice} onChangeValue={onChangeFromPrice} />
          <ConvertTo value={toPrice} onChangeValue={onChangeToPrice} />
        </ul>
      </div>
    </div>
  );
}

export default CurrencyConverter;
