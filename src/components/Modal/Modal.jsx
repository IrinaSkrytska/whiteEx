import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import css from './Modal.module.css';

export default function ShowModal({ show, handleClose }) {
  const [contact] = useState({});
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
                  value={contact.name}
                  className={css.modal__input}
                />
              </li>
              <li className={css.modal__item}>
                <h2 className={css.modal__item__title}>
                  Телеграмм/контактный номер
                </h2>
                <input
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                  value={contact.name}
                  className={css.modal__input}
                />
              </li>
              <li className={css.modal__item}>
                <h2 className={css.modal__item__title}>E-mail</h2>

                <input
                  type="tel"
                  name="number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                  value={contact.number}
                  className={css.modal__input}
                />
              </li>
              <li className={css.modal__item}>
                <Button onClick={handleClose} className={css.button}>
                  Отправить
                </Button>
              </li>
            </ul>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
