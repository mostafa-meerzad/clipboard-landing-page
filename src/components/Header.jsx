import { Logo } from "../icons";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <h1 className="header__title"> A history of everything you copy</h1>
      <p className="header__desc">
        Clipboard allows you to track and organize everything you copy.
        Instantly access your clipboard on all your devices.
      </p>
      <motion.button
        whileTap={{ scale: 0.95 }}
        className="header__btn header__btn--ios"
      >
        Download for iOS
      </motion.button>
      <motion.button
        whileTap={{ scale: 0.95 }}
        className="header__btn header__btn--mac"
      >
        Download for Mac
      </motion.button>
    </header>
  );
};

export default Header;
