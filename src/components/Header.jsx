import { Logo } from "../icons";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <h1 className="header__title"> A history of everything you copy</h1>
      <p className="header__desc">
        Clipboard allows you to track and organize everything you copy.
        Instantly access your clipboard on all your devices.
      </p>
      <button className="header__btn header__btn--ios">Download for iOS</button>
      <button className="header__btn header__btn--mac">Download for Mac</button>
    </header>
  );
};

export default Header;
