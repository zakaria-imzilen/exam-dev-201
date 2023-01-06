import { Provider } from "react-redux";
import { store } from "./app/store";
import Recipes from "./components/Recipes";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Recipes />
      </Provider>
    </div>
  );
}

export default App;
