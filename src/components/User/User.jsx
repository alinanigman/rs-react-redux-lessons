import { useSelector } from "react-redux";
import { selectUserName, selectUserAge } from "@/selectors";

function User() {
  const name = useSelector(selectUserName);
  const age = useSelector(selectUserAge);

  return (
    <div>
      <h1>User</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default User;
