import React from "react";
import google from "../assets/logo-google.png";
import ibm from "../assets/logo-ibm.png";
import ms from "../assets/logo-microsoft.png";
import hp from "../assets/logo-hp.png";
import vector from "../assets/logo-vector-graphics.png";

import { Text, BlackList, Preview } from "../icons";
const brands = [
  { img: google, name: "Google" },
  { img: ibm, name: "IBM" },
  { img: ms, name: "Microsoft" },
  { img: hp, name: "HP" },
  { img: vector, name: "Vector-Graphics" }

];
const options = [
  {
    title: "Create blacklists",
    desc: "  Ensure sensitive information never makes its way to your clipboard by excluding certain sources.",
    img: <BlackList />
  },
  {
    title: "Plain text snippets",
    desc: "Remove unwanted formatting from copied text for a consistent look.",
    img: <Text />
  },
  {
    title: "Sneak preview",
    desc: "Quick preview of all snippets on your Clipboard for easy access.",
    img: <Preview />
  }
];
const SupperChargeWorkflow = () => {
  return (
    <section className="supper-charge-workflow">
      <h2 className="supper-charge-workflow__title">
        Supercharge your workflow
      </h2>
      <p className="supper-charge-workflow__desc">
        We’ve got the tools to boost your productivity.
      </p>

      <ul className="supper-charge-workflow__options-container">
        {options.map(({ title, desc, img }, index) => {
          return (
            <li key={index} className="supper-charge-workflow__option">
               {img}
              <h3 className="supper-charge-workflow__option-title">{title}</h3>
              <p className="supper-charge-workflow__option-desc">{desc}</p>
             
            </li>
          );
        })}
      </ul>

      <ul className="supper-charge-workflow__brands-container">
        {brands.map(({ img, name }, index) => {
          return (
            <li key={index} className="supper-charge-workflow__brand">
              <img src={img} alt={name} className={`supper-charge-workflow__brand-${name}`} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SupperChargeWorkflow;
