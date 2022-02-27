import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/mainpage";
import CodePage from "./components/page";

function App() {
  return (
    <Routes>
      <Route index element={<MainPage/>} />
      <Route path=":getparams" element={<CodePage/>} />
    </Routes>
  );
}

export default App;
