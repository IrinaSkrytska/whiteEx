import css from './BlockGet.module.css';
import get_arrow from '../../images/get_arrow.png';
import USD from '../../images/USD.png';
// import EUR from '../../images/EUR.png';
// import ZL from '../../images/zl.png';

const defaultCurrencies = ['USD', 'EUR', 'PLN'];

export const BlockGet = ({
  value,
  currency,
  onChangeValue,
  onChangeCurrency,
}) => {
  return (
    <>
      <div className={css.get__currency}>
        <div className={css.crypto__thumb}>
          <div className={css.title}>
            ОТДАЁТЕ:
            <img src={get_arrow} width="24" height="28" alt="" />
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
                    <img src={USD} width="36" height="36" alt="" />
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
export default BlockGet;
