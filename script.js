const BASE_URL = "https://api.binance.com/";

const BTCUSDTquery = "api/v3/ticker/price?symbol=BTCUSDT";

const exchangeRate = document.getElementById("rate");

const Bitcoin = document.getElementById("bitcoin");
console.log(Bitcoin);

const Ethereum = document.getElementById("Ethereum");
console.log(Ethereum);

Bitcoin.addEventListener("click", onBitcoinClick());
E.addEventListener("click", onEthereumClick());

function onBitcoinClick() {
  const exchangeRateMarkup = `
  <div class="title">КУРС НА ДАННЫЙ МОМЕНТ</div>
      <ul class="exchange__rate">
        <li class="exchange">
          <label>
            Отдаёте: <input class="exchange__value" placeholder="" />
          </label>
        </li>

        <li class="exchange">
          <label>
            Получаете: <input class="exchange__value" placeholder="" />
          </label>
        </li>

        <li>
          <button class="exchange__button" type="button">
            СОЗДАТЬ ЗАЯВКУ НА ОБМЕН
          </button>
        </li>
      </ul>
    </div>`;
  exchangeRate.innerHTML = exchangeRateMarkup;
}

function onEthereumClick() {
  const exchangeRateMarkup = `
  <div class="title">КУРС НА ДАННЫЙ МОМЕНТ</div>
      <ul class="exchange__rate">
    

        <li>
          <button class="exchange__button" type="button">
            СОЗДАТЬ ЗАЯВКУ НА ОБМЕН
          </button>
        </li>
      </ul>
    </div>`;
  exchangeRate.innerHTML = exchangeRateMarkup;
}
