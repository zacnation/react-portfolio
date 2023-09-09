import PropTypes from 'prop-types';
import ContactCard from './ContactCard';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Contact(props) {
  return (
    <div
      className={`transition-all duration-300 py-12 px-3 md:px-10 xl:px-60 2xl:px-96 ${
        props.darkMode ? 'bg-dark-I text-white' : 'bg-white text-black'
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
            darkMode={props.darkMode}
          />
        </div>
        <div className="flex justify-center items-center">
          <ContactCard
            icon={faGithub}
            title={'GitHub'}
            url={'github.com/zacnation'}
            darkMode={props.darkMode}
          />
        </div>
        <div className="flex justify-center items-center">
          <ContactCard
            icon={faEnvelope}
            title={'Email'}
            darkMode={props.darkMode}
          />
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};
