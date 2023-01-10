import css from './ConvertTo.module.css';

export const ConvertFrom = ({ value, onChangeValue }) => {
  return (
    <>
      <li className={css.exchange}>
        <label className={css.exchange__label}>
          Получаете:
          <input
            className={css.exchange__input__get}
            placeholder=""
            value={value}
            onChange={e => onChangeValue(e.currentTarget.value)}
            type="number"
          />
        </label>
      </li>
      <li>
        <button className={css.exchange__button} type="button">
          СОЗДАТЬ ЗАЯВКУ НА ОБМЕН
        </button>
      </li>
    </>
  );
};
export default ConvertFrom;
