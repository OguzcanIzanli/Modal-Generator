import styles from "./Pagination.module.scss";

interface PaginationProps {
  selectionArray: string[];
  setSelection: (item: string) => void;
  selection: string;
  size: string;
}

const Pagination: React.FC<PaginationProps> = ({
  selectionArray,
  setSelection,
  selection,
  size,
}) => {
  return (
    <ul className={styles.paginationContainer}>
      {selectionArray.map((item) => (
        <li
          onClick={() => setSelection(item.toString())}
          className={`${styles[size]} ${
            selection === item.toString() ? styles.active : ""
          }`}
          key={item}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
