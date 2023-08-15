import { Provider } from "react-redux";
import QuoteMachine from "./component/QuoteMachine.js";
import store from "./store.js";
// import "./index.css";

function App() {
  return (
    <Provider store={store}>
      <QuoteMachine />
    </Provider>
  );
}

export default App;
