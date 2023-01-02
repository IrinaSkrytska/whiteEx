import css from './Block.module.css';
import give_arrow from '../../images/give_arrow.png';
import get_arrow from '../../images/get_arrow.png';

const defaultCurrencies = [
  {
    type: 'Bitcoin',
    value: 'Bitcoin',
    img: require('../../images/Bitcoin.png'),
  },
  {
    type: 'Ethereum',
    value: 'Ethereum',
    img: require('../../images/Ethereum.png'),
  },
  {
    type: 'USDT TRC20',
    value: 'USDT TRC20',
    img: require('../../images/USDT.png'),
  },
  {
    type: 'USDT ERC20',
    value: 'USDT ERC20',
    img: require('../../images/USDT.png'),
  },
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

export const Block = ({ currency, onChangeCurrency }) => {
  return (
    <>
      <div className={css.give__currency}>
        <div className={css.crypto__thumb}>
          <div className={css.title}>
            ОТДАЁТЕ:
            <img src={give_arrow} width="24" height="28" alt="" />
          </div>
          <ul className={css.crypto__currencies__list}>
            {defaultCurrencies.map(({ key, value, img }) => (
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
          </ul>
        </div>
      </div>
      <div className={css.get__currency}>
        <div className={css.crypto__thumb}>
          <div className={css.title}>
            ПОЛУЧАЕТЕ:
            <img src={get_arrow} width="24" height="28" alt="" />
          </div>

          {/* CONDITION */}

          <ul className={css.crypto__currencies__list}>
            <li>
              <p className={css.cryptocurrency__type}>
                <span className={css.currency__img}>
                  {/* <img src={img} width="36" height="36" alt="" /> */}
                </span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Block;
