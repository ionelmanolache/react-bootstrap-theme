import { useAppContext } from "../../hooks";
import { changeName } from "../../reducers";

const Home: React.FC = () => {
  const ctx = useAppContext();

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    ctx.appDispatch(changeName(e.target.value));
  };

  return (
    <div className="main">
      <label htmlFor="name">hello {ctx.name}!</label>
      <p>
        <input
          id="name"
          name="textname"
          type="text"
          onChange={onNameChange}
          placeholder="Enter your name"
        />
      </p>
    </div>
  );
};

export default Home;
