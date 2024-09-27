import React from "react";
import styles from "./Hero.module.scss";
import Button from "../../ui/Button";
import IconCheck from "../../ui/icons/IconCheck";
import ExampleModal from "../../modal/ExampleModal";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1>Simple modal card creator</h1>
      <h2>
        A utility-first CSS framework packed with classeslike flex, pt-4,
        text-center and rotate-90 that can becomposed to build any design,
        directly in your markup.
      </h2>
      <Button size="large">Try it out now</Button>
      <ul>
        <li>
          <IconCheck />
          Free and paid plans
        </li>
        <li>
          <IconCheck />
          Setup in minutes
        </li>
        <li>
          <IconCheck />
          No credit card required*
        </li>
      </ul>
      <ExampleModal />
      <div className="flex text-white my-32">
        <div className="flex-1">
          <h4 className="text-7xl font-semibold pb-4">3x</h4>
          <p>Increase</p>
          <p>Conversion Rate</p>
        </div>
        <div className="flex-1">
          <h4 className="text-7xl font-semibold pb-4">120%</h4>
          <p>Email</p>
          <p>Subscribers</p>
        </div>
        <div className="flex-1">
          <h4 className="text-7xl font-semibold pb-4">390%</h4>
          <p>More Customer</p>
          <p>Engagement</p>
        </div>
        <div className="flex-1">
          <h5 className="text-4xl font-semibold">
            Popupsmart meets all your business needs.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Hero;
