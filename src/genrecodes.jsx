import React, { useState } from "react";
import { Link } from "react-router-dom";

const codelist = [
  { genre: "Adventures", code: "7442", type: "Adventures" },
  { genre: "Westerns", code: "7700", type: "Adventures" },
  { genre: "Hijacking movies", code: "20541", type: "Adventures" },
  { genre: "Action thrillers", code: "43048", type: "action" },
  { genre: "Asian action movies", code: "77232", type: "Adventures" },
  { genre: "Westerns", code: "7700", type: "action" },
];

function GenrePage({ keyword }) {
  const [data] = useState(() => {
    let a = {};
    codelist.forEach((d) => {
      if (
        d.genre.toLowerCase() === keyword.replaceAll("-", " ").toLowerCase()
      ) {
        a = d;
      }
    });
    return a;
  });

  return (
    <div>
      {Object.keys(data).length === 0 ? (
        <h1>404 Not Found</h1>
      ) : (
        <>
          <strong>{data.genre}</strong>
          <div>code: {data.code}</div>
        </>
      )}
    </div>
  );
}

function RelatedGenre(props) {
  let fData = codelist.filter(
    (data) => data.genre.toLowerCase() === props.keyword.replace(/-/g, " ")
  );

  if (fData.length === 0) {
    return null;
  }

  fData = fData[0].type;

  return (
    <>
      <h3>Related keywords:</h3>{" "}
      {codelist
        .filter((data) => data.type === fData)
        .map((data, key) => {
          return (
            <div key={key}>
              <strong> {data.genre}</strong>
              <div>code: {data.code}</div>
            </div>
          );
        })}
    </>
  );
}

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <input
        type="text"
        placeholder="search.."
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <h1>codes list:</h1>{" "}
      {codelist
        .filter((array) =>
          array.genre.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((array, key) => {
          if (searchTerm === "") {
            return (
              <div key={key}>
                <strong>genre: {array.genre}</strong>
                <div>code: {array.code}</div>
              </div>
            );
          } else {
            return (
              <div key={key}>
                <strong>genre: {array.genre}</strong>
                <p>
                  <Link to={array.genre.replace(/ /g, "-").toLowerCase()}>
                    view code
                  </Link>
                </p>
              </div>
            );
          }
        })}
    </>
  );
}

export { Search, GenrePage, RelatedGenre, codelist };
