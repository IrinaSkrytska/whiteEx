import css from './Block.module.css';
import give_arrow from '../../images/give_arrow.png';
import get_arrow from '../../images/get_arrow.png';

const fiatCurrencies = [
  {
    name: 'USD',
    value: 'USD',
    img: require('../../images/USD.png'),
  },
  {
    name: 'EUR',
    value: 'EUR',
    img: require('../../images/EUR.png'),
  },
  {
    name: 'PLN',
    value: 'PLN',
    img: require('../../images/zl.png'),
  },
];

const cryptoCurrencies = [
  {
    name: 'Bitcoin',
    value: 'BTC',
    img: require('../../images/Bitcoin.png'),
  },
  {
    name: 'Ethereum',
    value: 'ETH',
    img: require('../../images/Ethereum.png'),
  },
  {
    name: 'Tether',
    value: 'tether',
    img: require('../../images/USDT.png'),
  },
];

export const Block = ({
  key,
  value,
  name,
  img,
  onChangeCurrencyFrom,
  onChangeCurrencyTo,
  currencyFrom,
  currencyTo,
}) => {
  return (
    <>
      <div className={css.give__currency}>
        <div className={css.crypto__thumb}>
          <div className={css.title}>
            ОТДАЁТЕ:
            <img src={give_arrow} width="24" height="28" alt="" />
          </div>

          {/* CONDITION */}
          {cryptoCurrencies.map(({ key, value, img, name }) => (
            <li
              key={value}
              onClick={() => onChangeCurrencyFrom(value)}
              className={value === currencyFrom ? css.active : {}}
            >
              <p className={css.cryptocurrency__type}>
                <span className={css.currency__img}>
                  <img src={img} width="36" height="36" alt="" />
                </span>
                {name}
              </p>
            </li>
          ))}
          {/* CONDITION */}
          {fiatCurrencies.map(({ key, value, img, name }) => (
            <li
              key={value}
              onClick={() => onChangeCurrencyFrom(value)}
              className={value === currencyFrom ? css.active : {}}
            >
              <p className={css.cryptocurrency__type}>
                <span className={css.currency__img}>
                  <img src={img} width="36" height="36" alt="" />
                </span>
                {name}
              </p>
            </li>
          ))}

          <ul className={css.crypto__currencies__list}></ul>
        </div>
      </div>

      <div className={css.get__currency}>
        <div className={css.crypto__thumb}>
          <div className={css.title}>
            ПОЛУЧАЕТЕ:
            <img src={get_arrow} width="24" height="28" alt="" />
          </div>
          {currencyFrom === 'BTC' ||
          currencyFrom === 'ETH' ||
          currencyFrom === 'tether' ? (
            <>
              {fiatCurrencies.map(({ key, value, img, name }) => (
                <li
                  key={value}
                  onClick={() => onChangeCurrencyTo(value)}
                  className={value === currencyTo ? css.active : {}}
                >
                  <p className={css.cryptocurrency__type}>
                    <span className={css.currency__img}>
                      <img src={img} width="36" height="36" alt="" />
                    </span>
                    {name}
                  </p>
                </li>
              ))}
            </>
          ) : (
            <>
              {cryptoCurrencies.map(({ key, value, img, name }) => (
                <li
                  key={value}
                  onClick={() => onChangeCurrencyTo(value)}
                  className={value === currencyTo ? css.active : {}}
                >
                  <p className={css.cryptocurrency__type}>
                    <span className={css.currency__img}>
                      <img src={img} width="36" height="36" alt="" />
                    </span>
                    {name}
                  </p>
                </li>
              ))}
            </>
          )}

          <ul className={css.crypto__currencies__list}></ul>
        </div>
      </div>
    </>
  );
};
export default Block;
