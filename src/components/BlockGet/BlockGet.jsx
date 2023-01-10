// import css from './BlockGet.module.css';
// import get_arrow from '../../images/get_arrow.png';

// const fiatCurrencies = [
//   {
//     name: 'USD',
//     value: 'USD',
//     img: require('../../images/USD.png'),
//   },
//   {
//     name: 'EUR',
//     value: 'EUR',
//     img: require('../../images/EUR.png'),
//   },
//   {
//     name: 'PLN',
//     value: 'PLN',
//     img: require('../../images/zl.png'),
//   },
// ];

// const cryptoCurrencies = [
//   {
//     name: 'Bitcoin',
//     value: 'BTC',
//     img: require('../../images/Bitcoin.png'),
//   },
//   {
//     name: 'Ethereum',
//     value: 'ETH',
//     img: require('../../images/Ethereum.png'),
//   },
//   {
//     name: 'Tether',
//     value: 'tether',
//     img: require('../../images/USDT.png'),
//   },
// ];

// export const BlockGet = ({
//   key,
//   value,
//   name,
//   img,
//   onChangeCurrency,
//   currency,
// }) => {
//   console.log(currency);
//   return (
//     <>
//       <div className={css.get__currency}>
//         <div className={css.crypto__thumb}>
//           <div className={css.title}>
//             ПОЛУЧАЕТЕ:
//             <img src={get_arrow} width="24" height="28" alt="" />
//           </div>
//           {currency === 'BTC' ? (
//             <>
//               {cryptoCurrencies.map(({ key, value, img, name }) => (
//                 <li
//                   key={value}
//                   onClick={() => onChangeCurrency(value)}
//                   className={value === currency ? css.active : {}}
//                 >
//                   <p className={css.cryptocurrency__type}>
//                     <span className={css.currency__img}>
//                       <img src={img} width="36" height="36" alt="" />
//                     </span>
//                     {name}
//                   </p>
//                 </li>
//               ))}
//             </>
//           ) : (
//             <>
//               {fiatCurrencies.map(({ key, value, img, name }) => (
//                 <li
//                   key={value}
//                   onClick={() => onChangeCurrency(value)}
//                   className={value === currency ? css.active : {}}
//                 >
//                   <p className={css.cryptocurrency__type}>
//                     <span className={css.currency__img}>
//                       <img src={img} width="36" height="36" alt="" />
//                     </span>
//                     {name}
//                   </p>
//                 </li>
//               ))}
//             </>
//           )}
//           {/* CONDITION */}

//           {/* CONDITION */}

//           <ul className={css.crypto__currencies__list}></ul>
//         </div>
//       </div>
//     </>
//   );
// };
// export default BlockGet;
