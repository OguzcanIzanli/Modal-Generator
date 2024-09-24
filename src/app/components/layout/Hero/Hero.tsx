import styles from "./Hero.module.scss";
import Button from "../../ui/Button";
import IconCheck from "../../ui/Button/icons/IconCheck";

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
      <ol>
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
      </ol>
    </div>
  );
};

export default Hero;
