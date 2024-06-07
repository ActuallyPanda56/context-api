import { Context } from "./context/Context";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="w-screen h-screen flex justify-center">
      <Context.Provider value="">
        <AppRouter />
      </Context.Provider>
    </div>
  );
}

export default App;
