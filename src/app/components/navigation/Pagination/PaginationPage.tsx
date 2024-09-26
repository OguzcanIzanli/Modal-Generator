import styles from "./Pagination.module.scss";

interface PaginationPageProps {
  selectionArray: number[];
  setSelection: (item: number) => void;
  selection: number;
  size: string;
}

const PaginationPage: React.FC<PaginationPageProps> = ({
  selectionArray,
  setSelection,
  selection,
  size,
}) => {
  return (
    <ul className={styles.paginationContainer}>
      {selectionArray.map((item) => (
        <li
          onClick={() => setSelection(item)}
          className={`${styles[size]} ${
            selection === item ? styles.active : ""
          }`}
          key={item}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default PaginationPage;
