import PropTypes from 'prop-types';

export default function Slide(props) {
  const fillColor = props.darkMode ? '#fff' : '#000';

  const lightModeSVG = (
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
      <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
    </svg>
  );
  const darkModeSVG = (
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
      <path
        style={{ fill: fillColor }}
        d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
      />
    </svg>
  );
  return (
    <div className="px-12 md:p-0 md:flex md:align-center md:justify-center">
      <div>
        <img src={props.img} alt="" style={{ width: '400px' }} />
      </div>
      <div className="md:ml-9">
        <h2 className="text-xl font-bold pt-2 md:pt-0">{props.title}</h2>
        <div
          className={`flex items-center justify-center space-x-2 md:flex md:justify-start md:py-3 ${
            props.darkMode ? 'text-white' : 'text-black'
          }`}
        >
          {props.techs.map((item, index) => {
            return item === 'stimulus' ? (
              <img
                src={
                  props.darkMode
                    ? '../../dist/stimulus-svgrepo-com.svg'
                    : 'https://www.svgrepo.com/show/354392/stimulus.svg'
                }
                alt=""
                className="w-6 h-6 inline"
                key={index}
              />
            ) : (
              <i
                className={`text-2xl devicon-${item}-${
                  item === 'express' ? 'original' : 'plain'
                }`}
                key={index}
              ></i>
            );
          })}
        </div>
        <p className="md:w-96">{props.description}</p>
        <div className="flex items-center space-x-2">
          <a
            href={props.link}
            rel="noreferrer"
            target={'_blank'}
            className="font-bold underline underline-offset-2"
          >
            {props.title}{' '}
          </a>
          {props.darkMode ? darkModeSVG : lightModeSVG}
        </div>
      </div>
    </div>
  );
}

Slide.propTypes = {
  darkMode: PropTypes.bool,
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  techs: PropTypes.arrayOf(PropTypes.string),
  link: PropTypes.string,
};
