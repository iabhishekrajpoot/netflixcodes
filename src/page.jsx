import React from "react";
import { useParams } from "react-router-dom";
import { GenrePage, RelatedGenre } from './genrecodes'


const CodePage = () => {
const { getparams } = useParams();

return (
    <>
     <h1>genre page for {getparams.replace(/-/g, " ")}</h1>

      <GenrePage keyword={getparams}/>      
      <RelatedGenre keyword={getparams}/>

    </>
)
};

export default CodePage;