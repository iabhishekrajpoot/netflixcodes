import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { GenrePage, RelatedGenre } from "./genrecodes";
import NavBar from "./components/navbar";

function CodePage() {
  const { getparams } = useParams();

  useEffect(() => {
    document.title = `${getparams} - NetFlixCode`;
  }, [getparams]);

  return (
    <>
    <NavBar/>
    <div className="main_area">
      
      <h1 className="h1_gpage"><span className="h1_gpage_div">Genre Code for </span> {getparams.replace(/-/g, " ")}</h1>
     
      <GenrePage keyword={getparams} />
      <h2>Related Genere Codes:</h2>
      <div className="card_container" >
      <RelatedGenre keyword={getparams} />
      </div>
      </div>
    </>
  );
}

export default CodePage;
