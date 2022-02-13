import React from "react";
import { Route, Routes } from "react-router-dom";
import { Search } from "./genrecodes";
import CodePage from "./page";

function App() {
  return (
    <Routes>
      <Route index element={<Search />} />
      <Route path=":getparams" element={<CodePage />} />
    </Routes>
  );
}

export default App;
