// import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import css from './Modal.module.css';
import { useState, useEffect } from 'react';
const fiatCurrencies = [
  {
    name: 'USD',
    value: 'usd',
    img: require('../../images/USD.png'),
  },
  {
    name: 'EUR',
    value: 'EUR',
    img: require('../../images/EUR.png'),
  },
  {
    name: 'PLN',
    value: 'pln',
    img: require('../../images/zl.png'),
  },
];

const cryptoCurrencies = [
  {
    name: 'Bitcoin',
    value: 'bitcoin',
    img: require('../../images/Bitcoin.png'),
  },
  {
    name: 'Ethereum',
    value: 'ethereum',
    img: require('../../images/Ethereum.png'),
  },
  {
    name: 'Tether',
    value: 'tether',
    img: require('../../images/USDT.png'),
  },
];

export default function ShowModal({ show, handleClose, handleSubmit, value }) {
  // const [fromCurrency] = useState('bitcoin');
  // const [toCurrency] = useState('usd');
  // const [fromPrice, setFromPrice] = useState('');
  // const [toPrice, setToPrice] = useState('');
  // const [rates, setRates] = useState();
  // const [setComission] = useState('');
  // const [setComissionFee] = useState('');

  // useEffect(() => {
  //   setFromPrice('');
  //   setToPrice('');

  //   if (fromCurrency === 'bitcoin' && toCurrency === 'usd') {
  //     fetch('https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT').then(
  //       res =>
  //         res.json().then(json => {
  //           console.log(json.price);
  //           const roundedRates = Math.round(json.price);
  //           setRates(roundedRates);
  //         })
  //     );
  //   }
  //   if (fromCurrency === 'bitcoin' && toCurrency === 'EUR') {
  //     fetch('https://api.binance.com/api/v3/avgPrice?symbol=BTCEUR').then(res =>
  //       res.json().then(json => {
  //         console.log(json.price);
  //         const roundedRates = Math.round(json.price);
  //         setRates(roundedRates);
  //       })
  //     );
  //   }
  //   if (fromCurrency === 'bitcoin' && toCurrency === 'pln') {
  //     fetch('https://api.binance.com/api/v3/avgPrice?symbol=BTCPLN').then(res =>
  //       res.json().then(json => {
  //         console.log(json.price);
  //         const roundedRates = Math.round(json.price);
  //         setRates(roundedRates);
  //       })
  //     );
  //   }
  //   if (fromCurrency === 'usd' && toCurrency === 'bitcoin') {
  //     fetch(`https://api.exchangerate.host/convert?from=USD&to=BTC`).then(res =>
  //       res.json().then(json => {
  //         console.log(json.result);
  //         const roundedRates = Math.round(json.result);
  //         setRates(roundedRates);
  //       })
  //     );
  //   }
  //   if (fromCurrency === 'EUR' && toCurrency === 'bitcoin') {
  //     fetch(
  //       `https://api.exchangerate.host/convert?from=${fromCurrency}&to=BTC`
  //     ).then(res =>
  //       res.json().then(json => {
  //         console.log(json.result);
  //         setRates(json.result);
  //       })
  //     );
  //   }
  //   if (fromCurrency === 'pln' && toCurrency === 'bitcoin') {
  //     fetch(`https://api.exchangerate.host/convert?from=PLN&to=BTC`).then(res =>
  //       res.json().then(json => {
  //         console.log(json.result);

  //         setRates(json.result);
  //       })
  //     );
  //   }
  //   if (fromCurrency === 'ethereum' && toCurrency === 'usd') {
  //     fetch('https://api.binance.com/api/v3/avgPrice?symbol=ETHUSDT').then(
  //       res =>
  //         res.json().then(json => {
  //           console.log(json.price);
  //           const roundedRates = Math.round(json.price);
  //           setRates(roundedRates);
  //         })
  //     );
  //   }
  //   if (fromCurrency === 'ethereum' && toCurrency === 'EUR') {
  //     fetch('https://api.binance.com/api/v3/avgPrice?symbol=ETHEUR').then(res =>
  //       res.json().then(json => {
  //         console.log(json.price);
  //         const roundedRates = Math.round(json.price);
  //         setRates(roundedRates);
  //       })
  //     );
  //   }
  //   if (fromCurrency === 'ethereum' && toCurrency === 'pln') {
  //     fetch('https://api.binance.com/api/v3/avgPrice?symbol=ETHPLN').then(res =>
  //       res.json().then(json => {
  //         console.log(json.price);
  //         const roundedRates = Math.round(json.price);
  //         setRates(roundedRates);
  //       })
  //     );
  //   }
  //   if (fromCurrency === 'usd' && toCurrency === 'ethereum') {
  //     fetch(
  //       'https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=ETH'
  //     ).then(res =>
  //       res.json().then(json => {
  //         console.log(json.ETH);
  //         setRates(json.ETH);
  //       })
  //     );
  //   }
  //   if (fromCurrency === 'EUR' && toCurrency === 'ethereum') {
  //     fetch(
  //       'https://min-api.cryptocompare.com/data/price?fsym=EUR&tsyms=ETH'
  //     ).then(res =>
  //       res.json().then(json => {
  //         console.log(json.ETH);
  //         setRates(json.ETH);
  //       })
  //     );
  //   }
  //   if (fromCurrency === 'pln' && toCurrency === 'ethereum') {
  //     fetch(
  //       'https://min-api.cryptocompare.com/data/price?fsym=PLN&tsyms=ETH'
  //     ).then(res =>
  //       res.json().then(json => {
  //         console.log(json.ETH);
  //         setRates(json.ETH);
  //       })
  //     );
  //   }
  //   if (fromCurrency === 'tether' && toCurrency === 'usd') {
  //     fetch(
  //       'https://min-api.cryptocompare.com/data/price?fsym=USDT&tsyms=USD'
  //     ).then(res =>
  //       res.json().then(json => {
  //         console.log(json.USD);
  //         const roundedRates = Math.round(json.USD);
  //         setRates(roundedRates);
  //       })
  //     );
  //   }
  //   if (fromCurrency === 'tether' && toCurrency === 'EUR') {
  //     fetch(
  //       'https://min-api.cryptocompare.com/data/price?fsym=USDT&tsyms=EUR'
  //     ).then(res =>
  //       res.json().then(json => {
  //         console.log(json.EUR);
  //         const roundedRates = Math.round(json.EUR);
  //         setRates(roundedRates);
  //       })
  //     );
  //   }
  //   if (fromCurrency === 'tether' && toCurrency === 'pln') {
  //     fetch(
  //       'https://min-api.cryptocompare.com/data/price?fsym=USDT&tsyms=PLN'
  //     ).then(res =>
  //       res.json().then(json => {
  //         console.log(json.PLN);
  //         const roundedRates = Math.round(json.PLN);
  //         setRates(roundedRates);
  //       })
  //     );
  //   }
  //   if (fromCurrency === 'usd' && toCurrency === 'tether') {
  //     fetch(
  //       'https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=USDT'
  //     ).then(res =>
  //       res.json().then(json => {
  //         setRates(json.USDT);
  //         console.log(json.USDT);
  //       })
  //     );
  //   }
  //   if (fromCurrency === 'EUR' && toCurrency === 'tether') {
  //     fetch(
  //       'https://min-api.cryptocompare.com/data/price?fsym=EUR&tsyms=USDT'
  //     ).then(res =>
  //       res.json().then(json => {
  //         console.log(json.USDT);
  //         setRates(json.USDT);
  //       })
  //     );
  //   }
  //   if (fromCurrency === 'pln' && toCurrency === 'tether') {
  //     fetch(
  //       'https://min-api.cryptocompare.com/data/price?fsym=PLN&tsyms=USDT'
  //     ).then(res =>
  //       res.json().then(json => {
  //         console.log(json.USDT);

  //         setRates(json.USDT);
  //       })
  //     );
  //   }
  //   if (
  //     fromCurrency === 'bitcoin' ||
  //     fromCurrency === 'ethereum' ||
  //     fromCurrency === 'tether'
  //   ) {
  //     fetch(`https://api.coincap.io/v2/rates/${fromCurrency}`).then(res =>
  //       res.json().then(json => {
  //         console.log(json.data.rateUsd);
  //         const roundedComission = Math.round(json.data.rateUsd);
  //         setComission(roundedComission);
  //       })
  //     );
  //   }
  //   if (toCurrency === 'bitcoin') {
  //     fetch(
  //       `https://api.exchangerate.host/convert?from=${fromCurrency}&to=BTC`
  //     ).then(res =>
  //       res.json().then(json => {
  //         setComission(json.result);
  //         console.log(json.result);
  //       })
  //     );
  //   }
  //   if (
  //     fromCurrency === 'usd' ||
  //     fromCurrency === 'EUR' ||
  //     (fromCurrency === 'pln' && toCurrency === 'ethereum')
  //   ) {
  //     fetch(
  //       `https://min-api.cryptocompare.com/data/price?fsym=${fromCurrency}&tsyms=ETH`
  //     ).then(res =>
  //       res.json().then(json => {
  //         setComission(json.ETH);
  //         console.log(json.ETH);
  //       })
  //     );
  //   }
  //   if (
  //     fromCurrency === 'usd' ||
  //     fromCurrency === 'EUR' ||
  //     (fromCurrency === 'pln' && toCurrency === 'tether')
  //   ) {
  //     fetch(
  //       `https://min-api.cryptocompare.com/data/price?fsym=${fromCurrency}&tsyms=USDT`
  //     ).then(res =>
  //       res.json().then(json => {
  //         setComission(json.USDT);
  //         console.log(json.USDT);
  //       })
  //     );
  //   }
  //   setComissionFee('');
  // }, [fromCurrency, toCurrency, rates, setComissionFee, setComission]);

  // const onChangeFromPrice = value => {
  //   const priceWithComission = comission * value;
  //   console.log(priceWithComission);

  //   if (priceWithComission < 1000) {
  //     const comissionAmount = priceWithComission * 0.025;
  //     console.log(comissionAmount);

  //     const result = value * rates - comissionAmount;
  //     console.log(result);

  //     setComissionFee(comissionAmount);
  //     setToPrice(result);
  //     setFromPrice(value);
  //   }

  //   if (priceWithComission >= 1000 && priceWithComission < 5000) {
  //     const comissionAmount = Math.round(priceWithComission * 0.02);
  //     console.log(comissionAmount);

  //     const result = value * rates - comissionAmount;
  //     console.log(result);

  //     setComissionFee(comissionAmount);
  //     setToPrice(result);
  //     setFromPrice(value);
  //   }

  //   if (priceWithComission >= 5000 && priceWithComission < 10000) {
  //     const comissionAmount = Math.round(priceWithComission * 0.015);
  //     console.log(comissionAmount);

  //     const result = value * rates - comissionAmount;
  //     console.log(result);

  //     setComissionFee(comissionAmount);
  //     setToPrice(result);
  //     setFromPrice(value);
  //   }

  //   if (priceWithComission >= 10000) {
  //     const comissionAmount = Math.round(priceWithComission * 0.01);
  //     console.log(Math.round(comissionAmount));

  //     const result = value * rates - comissionAmount;
  //     console.log(result);

  //     setComissionFee(comissionAmount);
  //     setToPrice(result);
  //     setFromPrice(value);
  //   }
  // };

  // const onChangeToPrice = value => {
  //   setToPrice(value);
  // };

  return (
    <>
      <Modal show={show} onHide={handleClose} className={css.modal__backdrop}>
        <Modal.Header></Modal.Header>
        <Modal.Body className={css.modal__body}>
          <div className={css.modal__items}>
            <form action="https://app.form2chat.io/f/8eaa3f98" method="POST">
              <ul className={css.items}>
                <li className={css.modal__item}>
                  <h2 className={css.modal__item__title}>Имя</h2>

                  <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    className={css.modal__input}
                  />
                </li>
                <li className={css.modal__item}>
                  <h2 className={css.modal__item__title}>
                    Телеграмм/контактный номер
                  </h2>
                  <input
                    type="text"
                    name="phone"
                    required
                    className={css.modal__input}
                  />
                </li>
                <li className={css.modal__item}>
                  <h2 className={css.modal__item__title}>E-mail</h2>

                  <input
                    type="email"
                    name="email"
                    required
                    className={css.modal__input}
                  />
                </li>
                <li>
                  Отдаёте:
                  <select>
                    <options>
                      {cryptoCurrencies.map(({ key, value, img, name }) => (
                        <li key={value}>
                          <p className={css.cryptocurrency__type}>
                            <span className={css.currency__img}>
                              <img src={img} width="36" height="36" alt="" />
                            </span>
                            {name}
                          </p>
                        </li>
                      ))}
                    </options>
                  </select>
                </li>
                <li>
                  Получаете:
                  <select>
                    <options>
                      {fiatCurrencies.map(({ key, value, img, name }) => (
                        <li key={value}>
                          <p className={css.cryptocurrency__type}>
                            <span className={css.currency__img}>
                              <img src={img} width="36" height="36" alt="" />
                            </span>
                            {name}
                          </p>
                        </li>
                      ))}
                    </options>
                  </select>
                </li>

                <li className={css.modal__item}>
                  <button type="submit" className={css.button}>
                    Отправить
                  </button>
                </li>
                <li className={css.modal__item}>
                  <button
                    type="button"
                    className={css.button__close}
                    onClick={handleClose}
                  >
                    Закрыть
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
