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
      <About darkMode={props.darkMode} openModal={openModal} />
      {isModalOpen ? (
        <Modal
          darkMode={props.darkMode}
          onClose={() => {
            closeModal();
          }}
        />
      ) : (
        <Projects darkMode={props.darkMode} />
      )}
    </div>
  );
}

ParentComponent.propTypes = {
  darkMode: PropTypes.bool,
};
