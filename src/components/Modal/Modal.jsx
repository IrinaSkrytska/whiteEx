import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import css from './Modal.module.css';
import { useTelegram } from '../../hooks/useTelegram';

export default function ShowModal({ show, handleClose, handleSubmit }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  // const tg = useTelegram();

  // useEffect(() => {
  //   tg.MainButton.setParams({
  //     text: 'Отправить',
  //   });
  // });

  // useEffect(() => {
  //   if (!name || !phone || !email) {
  //     tg.MainButton.hide();
  //   } else {
  //     tg.MainButton.show();
  //   }
  // }, [name, phone, email, tg.MainButton]);

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        setEmail(value);
        console.log(email);
        break;

      case 'name':
        setName(value);
        console.log(name);
        break;

      case 'phone':
        setPhone(value);
        console.log(phone);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} className={css.modal__backdrop}>
        <Modal.Header></Modal.Header>
        <Modal.Body className={css.modal__body}>
          <div className={css.modal__items}>
            <ul className={css.items}>
              <li className={css.modal__item}>
                <h2 className={css.modal__item__title}>Имя</h2>
                <input
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                  value={name}
                  className={css.modal__input}
                  onChange={handleChange}
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
                  value={phone}
                  className={css.modal__input}
                  onChange={handleChange}
                />
              </li>
              <li className={css.modal__item}>
                <h2 className={css.modal__item__title}>E-mail</h2>

                <input
                  type="email"
                  name="email"
                  required
                  value={email}
                  className={css.modal__input}
                  onChange={handleChange}
                />
              </li>
              <li className={css.modal__item}>
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  className={css.button}
                >
                  Отправить
                </Button>
              </li>
              <li className={css.modal__item}>
                <Button
                  type="button"
                  onClick={handleClose}
                  className={css.button__close}
                >
                  Закрыть
                </Button>
              </li>
            </ul>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
