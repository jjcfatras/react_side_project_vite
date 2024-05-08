import { css } from "../styled-system/css";
import { useGetNewsByCountryQuery } from "./modules/news";

function App() {
  // const [count, setCount] = useState(0);
  const { data } = useGetNewsByCountryQuery("us");

  console.log(JSON.stringify({ data }, null, "\t"));

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <div
        className={css({
          fontSize: "2xl",
          fontWeight: "bold",
          borderColor: "red",
          borderWidth: 1,
        })}
      >
        Hello World
      </div>
    </>
  );
}

export default App;
