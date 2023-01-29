import React, { useId } from "react";
import img from "../assets/image-computer.png";

const options = [
  {
    title: "Quick Search",

    desc: "Easily search your snippets by content, category, web address, application, and more."
  },
  {
    title: "iCloud Sync",

    desc: "Instantly saves and syncs snippets across all your devices."
  },
  {
    title: "Complete History",

    desc: "Retrieve any snippets from the first moment you started using the app."
  }
];

const SnippetsTrack = () => {
  return (
    <section className="snippets-track">
      <h2 className="snippets-track__title">Keep track of your snippets</h2>
      <p className="snippets-track__desc">
        Clipboard instantly stores any item you copy in the cloud, meaning you
        can access your snippets immediately on all your devices. Our Mac and
        iOS apps will help you organize everything.
      </p>
      <div className="snippets-track__options">
        <img src={img} alt="" className="snippets-track__img" />

        <ul className="snippets-track__options-container">
          {options.map(({ title, desc }, index) => {
            return (
              <li className="snippets-track__option" key={index}>
                <h3 className="snippets-track__option-title">{title}</h3>
                <p className="snippets-track__option-desc">{desc}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default SnippetsTrack;
