import { useState } from 'react';
import '../Modal.css';

import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Modal(props) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        {props.title}
      </button>

      {modal && (
        <div className="modal">
          <div
            onClick={toggleModal}
            className={`${props.darkMode ? 'overlay-dark' : 'overlay'}`}
          ></div>
          <div
            className={`modal-content max-h-96 overflow-auto ${
              props.darkMode ? 'bg-very-dark text-white' : 'bg-light'
            }`}
          >
            <h2 className="font-bold">{props.title}</h2>
            <p>{props.description}</p>
            <button className="close-modal" onClick={toggleModal}>
              <FontAwesomeIcon
                icon={faTimes}
                className="absolute top-3 right-3 cursor-pointer"
                onClick={props.togglePopup}
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

Modal.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  togglePopup: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
