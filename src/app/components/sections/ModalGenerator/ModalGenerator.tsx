import styles from "./ModalGenerator.module.scss";
import ModalSelection from "./ModalSelection";

const ModalGenerator = () => {
  return (
    <div className={styles.modalGenerator}>
      <div className={styles.generatorTitle}>
        <h2>Modal Card Generator</h2>
        <p>
          Measure your return on email marketing efforts easier and faster by
          using thebest online tools. Popupsmart is ready to help you build an
          efficient email list!
        </p>
      </div>

      <ModalSelection />
    </div>
  );
};

export default ModalGenerator;
