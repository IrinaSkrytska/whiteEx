import css from './Block.module.css';
import give_arrow from '../../images/give_arrow.png';
// import Bitcoin from '../../images/Bitcoin.png';
// import Ethereum from '../../images/Ethereum.png';
// import USDT from '../../images/USDT.png';

const defaultCurrencies = ['Bitcoin', 'Ethereum', 'USDT TRC20', 'USDT ERC20'];
// const defaultImages = [Bitcoin, Ethereum, USDT];

export const Block = ({ value, currency, onChangeValue, onChangeCurrency }) => {
  return (
    <>
      <div className={css.give__currency}>
        <div className={css.crypto__thumb}>
          <div className={css.title}>
            ОТДАЁТЕ:
            <img src={give_arrow} width="24" height="28" alt="" />
          </div>
          <ul className={css.crypto__currencies__list}>
            {defaultCurrencies.map(cur => (
              <li
                onClick={() => onChangeCurrency(cur)}
                className={currency === cur ? css.active : {}}
                key={cur}
              >
                <p className={css.cryptocurrency__type}>
                  <span className={css.currency__img}>
                    {/* <img src={Bitcoin} width="36" height="36" alt="" /> */}
                  </span>
                  {cur}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Block;
