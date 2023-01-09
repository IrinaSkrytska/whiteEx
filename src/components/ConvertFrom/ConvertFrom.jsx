import css from './ConvertFrom.module.css';

export const ConvertFrom = ({ value, onChangeValue }) => {
  return (
    <>
      <li className={css.exchange}>
        <label>
          Отдаёте:
          <input
            className={css.exchange__input__give}
            placeholder=""
            value={value}
            onChange={e => onChangeValue(e.currentTarget.value)}
            type="number"
          />
        </label>
      </li>
    </>
  );
};
export default ConvertFrom;
