import PropTypes from "prop-types";
import Switch from "react-switch";

const ToggleSwitch = ({ checked, onChange }) => {
  return (
    <label>
      <Switch
        onChange={onChange}
        checked={checked}
        offColor="#2b283a"
        onColor="#f5f5f5"
        onHandleColor="#2b283a"
        offHandleColor="#f5f5f5"
        uncheckedIcon={
          <img src="../../public/moon.svg" alt="" className="w-6 px-1 pt-1.5" />
        }
        checkedIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 px-1 py-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        }
      />
    </label>
  );
};

ToggleSwitch.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ToggleSwitch;
