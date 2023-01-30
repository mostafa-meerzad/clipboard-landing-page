import React from "react";
import { motion } from "framer-motion";

const Download = () => {
  return (
    <section className="download">
      <h2 className="download__title"> Clipboard for iOS and Mac OS</h2>
      <p className="download__desc">
        Available for free on the App Store. Download for Mac or iOS, sync with
        iCloud and you’re ready to start adding to your clipboard.
      </p>

      <motion.button
        whileTap={{ scale: 0.95 }}
        className="download__btn download__btn--ios"
      >
        Download for iOS
      </motion.button>
      <motion.button
        whileTap={{ scale: 0.95 }}
        className="download__btn download__btn--mac"
      >
        Download for Mac
      </motion.button>
    </section>
  );
};

export default Download;
