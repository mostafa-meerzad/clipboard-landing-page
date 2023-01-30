import React from "react";
import { Logo, Facebook, Instagram, Twitter } from "../icons";
import { motion } from "framer-motion";

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

const linksContainerVariants = {
  hidden: {},
  visible: {}
};
const linksVariants = {
  hidden: { scale: 0.3 },
  visible: { scale: 1 }
};
const Footer = () => {
  return (
    <footer className="footer">
      <Logo />
      <motion.ul
        variants={linksContainerVariants}
        initial={"hidden"}
        whileInView={"visible"}
        transition={{ staggerChildren: 0.1 }}
        className="footer__links"
      >
        {links.map(({ link }, index) => {
          return (
            <motion.li
              variants={linksVariants}
              className="footer__link"
              key={index}
            >
              {link}
            </motion.li>
          );
        })}
      </motion.ul>

      <ul className="footer__social">
        {socialMedia.map(({ link, img }, index) => {
          return (
            <motion.li
              initial={{ scale: 0.3 }}
              whileInView={{ scale: 1 }}
              key={index}
              className="footer__social-link"
            >
              <a href={link}>{img}</a>
            </motion.li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;
