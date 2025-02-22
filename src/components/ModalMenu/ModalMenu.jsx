import PropTypes from "prop-types";

import ButtonClose from "../../elements/ButtonClose/ButtonClose";
import styles from "./ModalMenu.module.css";
import NavListMenu from "../../modules/NavListMenu/NavListMenu";
import Button from "../../elements/Button/Button";

const rootStyles = getComputedStyle(document.documentElement);
const btnSignUpBgColor = rootStyles.getPropertyValue("--btn-primary-bg");
const btnSignInBgColor = rootStyles.getPropertyValue("--btn-secondary-bg");

export default function ModalMenu({ setIsOpen }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ButtonClose setIsOpen={setIsOpen} />
      </div>
      <NavListMenu setIsOpen={setIsOpen} />
      <div className={styles.btn_group}>
        <Button
          name={"регистрация"}
          bgColor={btnSignUpBgColor}
          color={"#030718"}
          border={false}
        />
        <Button
          name={"Войти"}
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
