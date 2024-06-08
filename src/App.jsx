import AppRouter from "./router/AppRouter";
import { Context } from "./context/Context";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({});
  return (
    <div className="w-screen h-screen flex justify-center">
      <Context.Provider value={{ user, setUser }}>
        <AppRouter />
      </Context.Provider>
    </div>
  );
}

export default App;
