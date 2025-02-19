import { createPortal } from "react-dom";
import { useState } from "react";

import MenuIcon from "../../icons/Menu/Menu";
import ModalMenu from "../../components/ModalMenu/ModalMenu";
import styles from "./HamburgerMenu.module.css";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className={styles.button}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <MenuIcon />
      </button>
      {isOpen &&
        createPortal(<ModalMenu setIsOpen={setIsOpen} />, document.body)}
    </>
  );
}
