import PropTypes from "prop-types";

import styles from "./../Buttons.module.css";

export default function StartButton({ onClick, className }) {
  return (
    <button
      type="button"
      className={`${className} ${styles.button}`}
      onClick={onClick}
      aria-label="start the game"
    >
      Start
    </button>
  );
}

StartButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};
