import { useState } from 'react';
import '../Modal.css';

import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function AboutModal(props) {
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
        <div className={`${props.darkMode ? 'border-white' : 'border-black'}`}>
          <h2 className="font-bold underline underline-offset-2">
            {props.title}
          </h2>
        </div>
      </button>

      {modal && (
        <div className="modal">
          <div
            onClick={toggleModal}
            className={`${props.darkMode ? 'overlay-dark' : 'overlay'}`}
          ></div>
          <div
            className={`modal-content max-h-[60vh] md:max-h-[70vh] overflow-auto ${
              props.darkMode ? 'bg-very-dark text-white' : 'bg-light'
            }`}
          >
            <h2 className="font-bold text-2xl md:text-3xl mb-5">
              {props.innerTitle}
            </h2>

            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
              <img src="colt-certificate.jpeg" alt="" />
              <img src="colt-certificate.jpeg" alt="" />
              <img src="colt-certificate.jpeg" alt="" />
              <img src="colt-certificate.jpeg" alt="" />
              <img src="colt-certificate.jpeg" alt="" />
              <img src="colt-certificate.jpeg" alt="" />
            </div>

            <button className="close-modal" onClick={toggleModal}>
              <FontAwesomeIcon
                icon={faTimes}
                className="absolute top-3 right-3 cursor-pointer"
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

AboutModal.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  innerTitle: PropTypes.string.isRequired,
};
