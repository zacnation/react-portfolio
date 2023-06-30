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
        handleDiameter={14}
        height={20}
        width={40}
        uncheckedIcon={
          <img src="../../dist/moon.svg" alt="" className="w-5 px-1 pt-1" />
        }
        checkedIcon={
          <img src="../../dist/sun.svg" alt="" className="w-5 pl-1 pt-0.5" />
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
