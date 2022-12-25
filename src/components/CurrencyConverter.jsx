import css from './CurrencyConverter.module.css';
import give_arrow from '../images/give_arrow.png';
import get_arrow from '../images/get_arrow.png';
import Bitcoin from '../images/Bitcoin.png';
import Ethereum from '../images/Ethereum.png';
import USDT from '../images/USDT.png';
import USD from '../images/USD.png';
import EUR from '../images/EUR.png';
import ZL from '../images/zl.png';

// До 1.000$ - 2, 5 %
// Від 1.000$ до 5.000$ - 2%
// Від 5.000$ до 10.000$ - 1,5%
//   Від 10.000$ - 1 %

function onBitcoinClickUSD(event) {
  event.preventDefault();
  fetch('https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT').then(r =>
    r.json().then(j => console.log(parseFloat(j.price).toFixed(2)))
  );
}

function onBitcoinClickEUR(event) {
  event.preventDefault();
  fetch('https://api.binance.com/api/v3/avgPrice?symbol=BTCEUR').then(r =>
    r.json().then(j => console.log(parseFloat(j.price).toFixed(2)))
  );
}
function onBitcoinClickPLN(event) {
  event.preventDefault();
  fetch('https://api.binance.com/api/v3/avgPrice?symbol=BTCPLN').then(r =>
    r.json().then(j => console.log(parseFloat(j.price).toFixed(2)))
  );
}
function onEthereumClickUSD(event) {
  event.preventDefault();
  fetch('https://api.binance.com/api/v3/avgPrice?symbol=ETHUSDT').then(r =>
    r.json().then(j => console.log(parseFloat(j.price).toFixed(2)))
  );
}

function onEthereumClickEUR(event) {
  event.preventDefault();
  fetch('https://api.binance.com/api/v3/avgPrice?symbol=ETHEUR').then(r =>
    r.json().then(j => console.log(parseFloat(j.price).toFixed(2)))
  );
}
function onEthereumClickPLN(event) {
  event.preventDefault();
  fetch('https://api.binance.com/api/v3/avgPrice?symbol=ETHPLN').then(r =>
    r.json().then(j => console.log(parseFloat(j.price).toFixed(2)))
  );
}

function onTRC20ClickUSD(event) {
  event.preventDefault();
  const data = fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=tether'
  ).then(r => r.json().then(data => console.log(data[0].current_price)));
}
function onTRC20ClickEUR(event) {
  event.preventDefault();
  const data = fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=tether'
  ).then(r => r.json().then(data => console.log(data[0].current_price)));
}
function onTRC20ClickPLN(event) {
  event.preventDefault();
  const data = fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=pln&ids=tether'
  ).then(r => r.json().then(data => console.log(data[0].current_price)));
}
function onERC20ClickUSD(event) {
  event.preventDefault();
  const data = fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=tether'
  ).then(r => r.json().then(data => console.log(data[0].current_price)));
}
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
            <li
              className={css.cryptocurrency__option}
              id="bitcoin"
              onClick={onBitcoinClickPLN}
            >
              <p className={css.cryptocurrency__type}>
                <span className={css.currency__img}>
                  <img src={Bitcoin} width="36" height="36" alt="" />
                </span>
                Bitcoin
              </p>
            </li>
            <li id="Ethereum" onClick={onEthereumClickEUR}>
              <p className={css.cryptocurrency__type}>
                <span className={css.currency__img}>
                  <img src={Ethereum} width="36" height="36" alt="" />
                </span>
                Ethereum
              </p>
            </li>
            <li id="TRC20" onClick={onTRC20ClickPLN}>
              <p className={css.cryptocurrency__type}>
                <span className={css.currency__img}>
                  <img src={USDT} width="36" height="36" alt="" />
                </span>
                USDT TRC20
              </p>
            </li>
            <li id="ERC20" onClick={onERC20ClickUSD}>
              <p className={css.cryptocurrency__type}>
                <span className={css.currency__img}>
                  <img src={USDT} width="36" height="36" alt="" />
                </span>
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
                <span className={css.currency__img}>
                  <img src={USD} width="36" height="36" alt="" />
                </span>
                USD
              </p>
            </li>
            <li id="EUR">
              <p className={css.cryptocurrency__type}>
                <span className={css.currency__img}>
                  <img src={EUR} width="36" height="36" alt="" />
                </span>
                EUR
              </p>
            </li>
            <li id="PLN">
              <p className={css.cryptocurrency__type} href="#">
                <span className={css.currency__img}>
                  <img src={ZL} width="36" height="36" alt="" />
                </span>
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
