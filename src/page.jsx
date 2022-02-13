import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { GenrePage, RelatedGenre } from "./genrecodes";

function CodePage() {
  const { getparams } = useParams();

  useEffect(() => {
    document.title = `${getparams} - NetFlixCode`;
  }, [getparams]);

  return (
    <>
      <h1>genre page for {getparams.replace(/-/g, " ")}</h1>

      <GenrePage keyword={getparams} />
      <RelatedGenre keyword={getparams} />
    </>
  );
}

export default CodePage;
