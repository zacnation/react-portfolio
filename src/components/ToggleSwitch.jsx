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
          <img src="../../public/sun.svg" alt="" className="w-8 px-1 pt-1" />
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
