import reactLogo from "./assets/react.svg";
import "./App.css";
import { useRebill } from "rebill-react";
import { useEffect } from "react";

function App() {
  const { setTransaction, setStyles, sdk } = useRebill();

  useEffect(() => {
    setTransaction({
      id: "2ceb19a0-7c91-43ab-a201-3cdbaad4e80c",
      currency: "ARS",
      quantity: 1,
    });

    setStyles({
      rebill_options_container: {
        backgroundColor: "#242424",
      },
      rebill_divider_span: {
        backgroundColor: "#242424",
      },
    });
  }, [sdk]);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Test Rebill + React</h1>
      <div id="rebill">{/* here will the iframe be injected */}</div>
    </>
  );
}

export default App;
