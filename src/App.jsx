import { User, ControlPanel } from "./components";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <User />
      <ControlPanel />
    </div>
  );
}

export default App;
