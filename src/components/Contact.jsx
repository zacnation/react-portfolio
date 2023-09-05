import PropTypes from 'prop-types';
import ContactCard from './ContactCard';

export default function Contact(props) {
  return (
    <div
      className={`transition-all duration-300 pt-8 px-3 md:px-10 xl:px-60 2xl:px-96 ${
        props.darkMode ? 'bg-dark-I text-white' : 'bg-white text-black'
      }`}
    >
      <h2 className="text-2xl font-bold pb-3 flex flex-col">Contact</h2>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="flex justify-center items-center">
          <ContactCard title={'LinkedIn'} />
        </div>
        <div className="flex justify-center items-center">
          <ContactCard title={'GitHub'} />
        </div>
        <div className="flex justify-center items-center">
          <ContactCard title={'Email'} />
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};
