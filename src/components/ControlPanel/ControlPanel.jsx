import { useDispatch } from "react-redux";
import { increaseAge, RESET_AGE, changeUser } from "@/actions";
import styles from "./ControlPanel.module.css";

function ControlPanel() {
  const dispatch = useDispatch();

  const onAgeIncrease = () => {
    const delta = 1;
    dispatch(increaseAge(delta));
  };

  const onAgeReset = () => {
    dispatch(RESET_AGE());
  };

  const onUserChange = () => {
    dispatch(changeUser());
  };

  return (
    <div className={styles.ControlPanel}>
      <button onClick={onAgeIncrease}>Increase age</button>
      <button onClick={onAgeReset}>Reset age</button>
      <button onClick={onUserChange}>Change user</button>
    </div>
  );
}

export default ControlPanel;
