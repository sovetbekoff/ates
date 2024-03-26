import React from "react";

// import Home from "./components/Home";
import MainRoutes from "./components/routes/MainRoutes";
import Navbar from "./components/ui/Navbar";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />

      <MainRoutes />
    </div>
  );
};

export default App;
