import React from "react";
import img from "../assets/image-devices.png";

const ClipboardAccess = () => {
  return (
    <section className="clipboard-access">
      <h2 className="clipboard-access__title">Access Clipboard anywhere</h2>
      <p className="clipboard-access__desc">
        Whether you’re on the go, or at your computer, you can access all your
        Clipboard snippets in a few simple clicks.
      </p>
      <img src={img} alt="" className="clipboard-access__img" />
    </section>
  );
};

export default ClipboardAccess;
