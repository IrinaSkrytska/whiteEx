import css from './ConvertTo.module.css';
import { useState } from 'react';
import ShowModal from 'components/Modal';

export const ConvertFrom = ({ value, onChangeValue }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);

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
        <button
          className={css.exchange__button}
          type="button"
          onClick={handleShow}
        >
          СОЗДАТЬ ЗАЯВКУ НА ОБМЕН
        </button>
      </li>
      {show && <ShowModal show={show} handleClose={handleClose} />}
    </>
  );
};
export default ConvertFrom;
