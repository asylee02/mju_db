import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="w-full flex flex-col items-center">
      <Outlet />
    </div>
  );
}

export default App;
