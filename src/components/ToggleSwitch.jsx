import PropTypes from "prop-types";
import Switch from "react-switch";

const ToggleSwitch = ({ checked, onChange }) => {
  return (
    <label>
      <Switch
        onChange={onChange}
        checked={checked}
        offColor="#faa"
        onColor="#faa"
      />
    </label>
  );
};

ToggleSwitch.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ToggleSwitch;
