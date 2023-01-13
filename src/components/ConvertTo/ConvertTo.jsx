import css from './ConvertTo.module.css';
import { useState } from 'react';
import ShowModal from 'components/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ConvertFrom = ({ value, onChangeValue, name }) => {
  const [show, setShow] = useState(false);
  const notify = () => {
    toast.success(
      'Данные успешно отправлены. Мы свяжемся с Вами в ближайшее время',
      { theme: 'dark', position: toast.POSITION.TOP_CENTER }
    );
    if (name === '') {
      alert('no name');
    }
  };
  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);

  const handleSubmit = () => {
    notify();

    setShow(false);
  };

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
      {show && (
        <ShowModal
          show={show}
          handleClose={handleClose}
          handleSubmit={handleSubmit}
        />
      )}
      <ToastContainer />
    </>
  );
};
export default ConvertFrom;
