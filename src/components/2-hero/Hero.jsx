import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section id="about" className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./profile-pic (9).png"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Software designer, Frontend Developer, and Content Creator.
        </motion.h1>

        <p className="sub-title">
          I’m Makary Yasser, a software designer and Frontend Developer.
        </p>

        <div className="all-icons flex above-animation">
          <a
            href="https://www.instagram.com/makarryyy/?__pwa=1"
            className="icon icon-instagram"
          />
          <a
            href="https://github.com/makarydev19"
            className="icon icon-github"
          />
          <a
            href="https://www.linkedin.com/in/makary-yasser-8893b0317/"
            className="icon icon-linkedin"
          />
        </div>
      </div>

      <div className="right-section animation">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
      <div className="all-icons flex under-animation">
        <a
          href="https://www.instagram.com/makarryyy/?__pwa=1"
          className="icon icon-instagram"
        />
        <a href="https://github.com/makarydev19" className="icon icon-github" />
        <a
          href="https://www.linkedin.com/in/makary-yasser-8893b0317/"
          className="icon icon-linkedin"
        />
      </div>
    </section>
  );
};

export default Hero;
