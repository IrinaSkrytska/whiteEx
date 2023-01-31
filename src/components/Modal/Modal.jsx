// import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import css from './Modal.module.css';

export default function ShowModal({
  show,
  handleClose,
  handleSubmit,
  value,
  onChangeValue,
}) {
  // const [name, setName] = useState('');
  // const [phone, setPhone] = useState('');
  // const [email, setEmail] = useState('');
  // const handleChange = event => {
  //   const { name, value } = event.target;

  //   switch (name) {
  //     case 'email':
  //       setEmail(value);
  //       console.log(email);
  //       break;

  //     case 'name':
  //       setName(value);
  //       console.log(name);
  //       break;

  //     case 'phone':
  //       setPhone(value);
  //       console.log(phone);
  //       break;

  //     default:
  //       break;
  //   }
  // };

  return (
    <>
      <Modal show={show} onHide={handleClose} className={css.modal__backdrop}>
        <Modal.Header></Modal.Header>
        <Modal.Body className={css.modal__body}>
          <div className={css.modal__items}>
            <form action="https://app.form2chat.io/f/8eaa3f98" method="POST">
              <ul className={css.items}>
                <li className={css.modal__item}>
                  <h2 className={css.modal__item__title}>Имя</h2>

                  <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    className={css.modal__input}
                  />
                </li>
                <li className={css.modal__item}>
                  <h2 className={css.modal__item__title}>
                    Телеграмм/контактный номер
                  </h2>
                  <input
                    type="text"
                    name="phone"
                    required
                    className={css.modal__input}
                  />
                </li>
                <li className={css.modal__item}>
                  <h2 className={css.modal__item__title}>E-mail</h2>

                  <input
                    type="email"
                    name="email"
                    required
                    className={css.modal__input}
                  />
                </li>
                <li>
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
                <li>
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

                <li className={css.modal__item}>
                  <button type="submit" className={css.button}>
                    Отправить
                  </button>
                </li>
                <li className={css.modal__item}>
                  <button
                    type="button"
                    className={css.button__close}
                    onClick={handleClose}
                  >
                    Закрыть
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
