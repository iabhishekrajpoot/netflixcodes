import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { GenrePage, RelatedGenre } from "./genrecodes";
import NavBar from "./navbar";

function CodePage() {
  const { getparams } = useParams();

  useEffect(() => {
    document.title = `${getparams} - NetFlixCode`;
  }, [getparams]);

  return (
    <>
      <NavBar />
      <div className="main">
        <div className="main_area">
          <h1><div className="h1_gpage">Genre code for {getparams.replace(/-/g, " ")}</div></h1>
          <GenrePage keyword={getparams}/>
          <h2 className="label">Related Genere Codes:</h2>
          <div className="card_container">
            <RelatedGenre keyword={getparams}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default CodePage;
