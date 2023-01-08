import css from './BlockGet.module.css';
import get_arrow from '../../images/get_arrow.png';
import USD from '../../images/USD.png';

const fiatCurrencies = [
  {
    type: 'USD',
    value: 'USD',
    img: require('../../images/USD.png'),
  },
  {
    type: 'EUR',
    value: 'EUR',
    img: require('../../images/EUR.png'),
  },
  {
    type: 'PLN',
    value: 'PLN',
    img: require('../../images/zl.png'),
  },
];

const cryptoCurrencies = [
  {
    type: 'Bitcoin',
    value: 'BTC',
    img: require('../../images/Bitcoin.png'),
  },
  {
    type: 'Ethereum',
    value: 'ETH',
    img: require('../../images/Ethereum.png'),
  },
  {
    type: 'USDT TRC20',
    value: 'USDT',
    img: require('../../images/USDT.png'),
  },
  {
    type: 'USDT ERC20',
    value: 'USDT ERC20',
    img: require('../../images/USDT.png'),
  },
];

export const BlockGet = ({ key, value, img, onChangeCurrency, currency }) => {
  return (
    <>
      <div className={css.get__currency}>
        <div className={css.crypto__thumb}>
          <div className={css.title}>
            ПОЛУЧАЕТЕ:
            <img src={get_arrow} width="24" height="28" alt="" />
          </div>

          {/* CONDITION */}
          {cryptoCurrencies.map(({ key, value, img }) => (
            <li
              key={value}
              onClick={() => onChangeCurrency(value)}
              className={value === currency ? css.active : {}}
            >
              <p className={css.cryptocurrency__type}>
                <span className={css.currency__img}>
                  <img src={img} width="36" height="36" alt="" />
                </span>
                {value}
              </p>
            </li>
          ))}

          {/* CONDITION */}
          {fiatCurrencies.map(({ key, value, img }) => (
            <li
              key={value}
              onClick={() => onChangeCurrency(value)}
              className={value === currency ? css.active : {}}
            >
              <p className={css.cryptocurrency__type}>
                <span className={css.currency__img}>
                  <img src={img} width="36" height="36" alt="" />
                </span>
                {value}
              </p>
            </li>
          ))}
          <ul className={css.crypto__currencies__list}></ul>
        </div>
      </div>
    </>
  );
};
export default BlockGet;
