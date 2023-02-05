import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import css from './Modal.module.css';
// import get_arrow from '../../images/get_arrow.png';
// import give_arrow from '../../images/give_arrow.png';
// import { useState, useEffect } from 'react';
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
  const [fromCurrency] = useState('');
  // const [toCurrency] = useState('');
  // const [fromPrice, setFromPrice] = useState('');
  // const [toPrice, setToPrice] = useState('');
  // const [rates, setRates] = useState();
  // const [setComission] = useState('');
  // const [setComissionFee] = useState('');

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
                  <h2 className={css.modal__item__title}>Отдаёте:</h2>
                  <input
                    type="number"
                    name="fromCurrency"
                    placeholder="Amount"
                    required
                  />
                  <select fromCurrency={value}>
                    {cryptoCurrencies.map(({ key, value, img, name }) => (
                      <option key={value}>
                        <p className={css.cryptocurrency__type}>{name}</p>
                      </option>
                    ))}
                  </select>
                </li>

                <li>
                  <input type="number" placeholder="Amount" />
                  <select>
                    {fromCurrency === 'bitcoin' ||
                    fromCurrency === 'ethereum' ||
                    fromCurrency === 'tether' ? (
                      <>
                        {fiatCurrencies.map(({ key, value, img, name }) => (
                          <li>
                            <option key={value}>
                              <p className={css.cryptocurrency__type}>{name}</p>
                            </option>
                          </li>
                        ))}
                      </>
                    ) : (
                      <>
                        {cryptoCurrencies.map(({ key, value, img, name }) => (
                          <li>
                            <option key={value}>
                              <p className={css.cryptocurrency__type}>{name}</p>
                            </option>
                          </li>
                        ))}
                      </>
                    )}
                    {/*                   
                   {fromCurrency === 'bitcoin' || fromCurrency === 'ethereum'
                      || fromCurrency === 'tether' ? (
                      {
                        fiatCurrencies.map(({ key, value, img, name }) => (
                          <option key={value} fromCurrency={value}>
                            <p className={css.cryptocurrency__type}>{name}</p>
                          </option>))
                      }) : (
                      {
                        cryptoCurrencies.map(({ key, value, img, name }) => (
                          <option key={value} fromCurrency={value}>
                            <p className={css.cryptocurrency__type}>{name}</p>
                          </option>))
                      }) }  */}
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
