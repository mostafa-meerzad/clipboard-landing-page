import React from "react";
import { Logo, Facebook, Instagram, Twitter } from "../icons";

const socialMedia = [
  {
    link: "#",
    img: <Facebook />
  },
  {
    link: "#",
    img: <Twitter />
  },
  {
    link: "#",
    img: <Instagram />
  }
];
const links = [
  {
    link: "FAQs"
  },
  {
    link: "Contact Us"
  },
  {
    link: "Privacy Policy"
  },
  {
    link: "Press Kit"
  },
  {
    link: "Install Guide"
  }
];
const Footer = () => {
  return (
    <footer className="footer">
      <Logo />
      <ul className="footer__links">
        {links.map(({ link }, index) => {
          return (
            <li className="footer__link" key={index}>
              {link}
            </li>
          );
        })}
      </ul>

      <ul className="footer__social">
        {socialMedia.map(({ link, img }, index) => {
          return (
            <li key={index} className="footer__social-link">
              <a href={link}>{img}</a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;
