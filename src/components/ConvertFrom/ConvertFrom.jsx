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
            onChange={e => onChangeValue(e.target.value)}
            type="number"
          />
        </label>
      </li>
    </>
  );
};
export default ConvertFrom;
