import PropTypes from 'prop-types';
import ContactCard from './ContactCard';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Contact({ darkMode }) {
  return (
    <div
      id="contact"
      className={`transition-all duration-300 py-12 px-3 md:px-10 xl:px-60 2xl:px-96 ${
        darkMode ? 'bg-dark-I text-white' : 'bg-white text-black'
      }`}
    >
      <h2 className="pb-10 text-2xl font-bold flex justify-center">
        Let&apos;s connect!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="flex justify-center items-center">
          <ContactCard
            icon={faLinkedin}
            title={'LinkedIn'}
            url={'linkedin.com/in/zacnation/'}
            darkMode={darkMode}
          />
        </div>
        <div className="flex justify-center items-center">
          <ContactCard
            icon={faGithub}
            title={'GitHub'}
            url={'github.com/zacnation'}
            darkMode={darkMode}
          />
        </div>
        <div className="flex justify-center items-center">
          <ContactCard icon={faEnvelope} title={'Email'} darkMode={darkMode} />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <a href="#main" className="mt-20 animate-bounce">
          <img
            src={darkMode ? 'up-arrow-inverted.svg' : 'up-arrow.svg'}
            alt=""
            className="w-14"
          />
        </a>
        <a href="#main">
          <p className="text-lg font-bold">Back to top</p>
        </a>
      </div>
    </div>
  );
}

Contact.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};
