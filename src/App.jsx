import React from "react";
import { Route, Routes } from "react-router-dom";
import {Search} from './genrecodes'
import CodePage from "./page";


const App = () => {
    return (<>
    <Routes>
        <Route path="/" element={<Search/>} />
        <Route path=":getparams" element={<CodePage/>}/>
    </Routes>
    </>
    );
};

export default App;