import styles from "./Pagination.module.scss";

interface PaginationProps {
  selectionArray: number[];
  setSelection: (item: string) => void;
  selection: string;
}

const Pagination: React.FC<PaginationProps> = ({
  selectionArray,
  setSelection,
  selection,
}) => {
  return (
    <ul className={styles.paginationContainer}>
      {selectionArray.map((item) => (
        <li
          onClick={() => setSelection(item.toString())}
          className={selection === item.toString() ? styles.active : ""}
          key={item}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
