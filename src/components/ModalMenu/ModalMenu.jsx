import PropTypes from "prop-types";

import ButtonClose from "../../elements/ButtonClose/ButtonClose";
import styles from "./ModalMenu.module.css";
import NavListMenu from "../../modules/NavListMenu/NavListMenu";
import Button from "../../elements/Button/Button";
import { useState } from "react";

const rootStyles = getComputedStyle(document.documentElement);
const btnSignUpBgColor = rootStyles.getPropertyValue("--btn-primary-bg");
const btnSignInBgColor = rootStyles.getPropertyValue("--btn-secondary-bg");

export default function ModalMenu({ setIsOpen }) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => setIsOpen(false), 500);
  };

  return (
    <div
      className={`${styles.wrapper} ${isClosing ? styles.close : styles.open}`}
    >
      <div className={styles.container}>
        <ButtonClose onClick={handleClose} />
      </div>
      <NavListMenu setIsOpen={setIsOpen} />
      <div className={styles.btn_group}>
        <Button
          name={"Register"}
          bgColor={btnSignUpBgColor}
          color={"#030718"}
          border={false}
        />
        <Button
          name={"Login"}
          bgColor={btnSignInBgColor}
          color={btnSignUpBgColor}
          border={`2px solid ${btnSignUpBgColor}`}
        />
      </div>
    </div>
  );
}

ModalMenu.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};
