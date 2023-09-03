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
        <div
          className={`flex items-center border-solid border-2 py-2 px-6 rounded ${
            props.darkMode ? 'border-white' : 'border-black'
          }`}
        >
          <img src={props.iconSrc} alt="" className="w-16" />
          <h2 className="text-lg">{props.title}</h2>
        </div>
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
            <a href={props.urlSrc} className="underline">
              My GoodReads account
            </a>
            <p>{props.description}</p>
            <img src={props.imgSrc} alt="" className="m-auto" />
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

Modal.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  iconSrc: PropTypes.string.isRequired,
  urlSrc: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};
