import React, { useState } from 'react';
import PropTypes from 'prop-types';
import About from './About';
import Projects from './Projects';
import Modal from './Modal';

export default function ParentComponent(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <About darkMode={props.darkMode} />
      <button onClick={openModal}>Open Modal</button>{' '}
      {/* Add a button to open the modal */}
      {!isModalOpen && <Projects darkMode={props.darkMode} />}
      {isModalOpen && (
        <Modal
          darkMode={props.darkMode}
          onClose={closeModal} // Pass the closeModal function to the Modal component
        />
      )}
    </div>
  );
}

ParentComponent.propTypes = {
  darkMode: PropTypes.bool,
};
