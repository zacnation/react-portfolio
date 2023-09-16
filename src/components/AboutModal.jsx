import { useState } from 'react';
import '../Modal.css';

import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function AboutModal(props) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
    if (!modal && props.onOpen) {
      props.onOpen(); // Call the onOpen function when opening the modal
    }
    if (modal && props.onClose) {
      props.onClose(); // Call the onClose function when closing the modal
    }
  };

  if (modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        <h2 className="font-bold underline underline-offset-2">
          {props.title}
        </h2>
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
              <img src="lewagon.png" alt="" />
              <img
                src={`${props.darkMode ? 'bcs-inverted.svg' : 'bcs.svg'}`}
                alt=""
                className="w-32"
              />
              <img src="colt-certificate.jpeg" alt="" />
              <img src="js13.png" alt="" />
              <img src="react13.png" alt="" />
              <img src="node13.png" alt="" />
              <img src="express13.png" alt="" />
              <img src="git13.png" alt="" />
              <img src="python13.png" alt="" />
              <img src="ruby13.png" alt="" />
              <img src="rails13.png" alt="" />
              <img src="sql13.png" alt="" />
              <img src="testing13.png" alt="" />
              <img src="emoji13.png" alt="" />
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
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
};
