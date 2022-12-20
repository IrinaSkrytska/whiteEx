import css from './CurrencyConverter.module.css';
import give_arrow from '../images/give_arrow.png';
import get_arrow from '../images/get_arrow.png';
import Bitcoin from '../images/Bitcoin.png';
import Ethereum from '../images/Ethereum.png';
import USDT from '../images/USDT.png';
import USD from '../images/USD.png';
import EUR from '../images/EUR.png';
import ZL from '../images/zl.png';

export default function CurrencyConverter() {
  return (
    <div className={css.wrapper}>
      <div className={css.give__currency}>
        <div className={css.crypto__thumb}>
          <div className={css.title}>
            ОТДАЁТЕ:
            <img src={give_arrow} width="24" height="28" alt="" />
          </div>
          <ul className={css.cryptocurrency__list}>
            <li className={css.cryptocurrency__option} id="bitcoin">
              <p className={css.cryptocurrency__type}>
                <div className={css.currency__img}>
                  <img src={Bitcoin} width="36" height="36" alt="" />
                </div>
                Bitcoin
              </p>
            </li>
            <li id="Ethereum">
              <p className={css.cryptocurrency__type}>
                <div className={css.currency__img}>
                  <img src={Ethereum} width="36" height="36" alt="" />
                </div>
                Ethereum
              </p>
            </li>
            <li id="TRC20">
              <p className={css.cryptocurrency__type}>
                <div className={css.currency__img}>
                  <img src={USDT} width="36" height="36" alt="" />
                </div>
                USDT TRC20
              </p>
            </li>
            <li id="ERC20">
              <p className={css.cryptocurrency__type}>
                <div className={css.currency__img}>
                  <img src={USDT} width="36" height="36" alt="" />
                </div>
                USDT ERC20
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className={css.get__currency}>
        <div className={css.crypto__thumb}>
          <div className={css.title}>
            ПОЛУЧАЕТЕ:
            <img src={get_arrow} width="24" height="28" alt="" />
          </div>
          <ul className={css.cryptocurrency__list}>
            <li id="USD">
              <p className={css.cryptocurrency__type}>
                <div className={css.currency__img}>
                  <img src={USD} width="36" height="36" alt="" />
                </div>
                USD
              </p>
            </li>
            <li id="EUR">
              <p className={css.cryptocurrency__type}>
                <div className={css.currency__img}>
                  <img src={EUR} width="36" height="36" alt="" />
                </div>
                EUR
              </p>
            </li>
            <li id="PLN">
              <p className={css.cryptocurrency__type} href="#">
                <div className={css.currency__img}>
                  <img src={ZL} width="36" height="36" alt="" />
                </div>
                PLN
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div id="rate" className={css.exchange__rate__thumb}>
        <div className={css.title} id="title"></div>
        <ul className={css.exchange__rate}>
          <li className={css.exchange}>
            <label>
              Отдаёте: <input className={css.exchange__value} placeholder="" />
            </label>
          </li>

          <li className={css.exchange}>
            <label>
              Получаете:{' '}
              <input className={css.exchange__value} placeholder="" />
            </label>
          </li>

          <li>
            <button className={css.exchange__button} type="button">
              СОЗДАТЬ ЗАЯВКУ НА ОБМЕН
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
