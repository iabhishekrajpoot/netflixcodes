import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./components/navbar";

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
        <div>404 Not Found</div>
      ) : (
        <>
  
        <div className="gpage_code_block">
          <div className="gpage_code_block_div">{data.genre}</div>
          <div className="gpage_code_block_ddiv"><span className="gpage_code_block_span" >code:</span> {data.code}</div>
          </div>
        
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
      {codelist
        .filter((Related) => Related.type === fData)
        .map((Related, key) => {
          return (
            <div className="card" key={key}>
              <span>{Related.genre} </span>
              <div className="card_div_right">
                <span className="card_slash">|</span>
                <Link to={Related.genre.replace(/ /g, "-").toLowerCase()} >
                  view code
                </Link>
              </div>

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
      <NavBar />
      <div className="main_area">
        <div className="search_div">
          <h1>Netflix Genre Codes</h1>
          <input
            className="search_bar"
            type="text"
            placeholder="Search Genre code ..."
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </div>
        <h2>Codes list:</h2>{" "}

        <div className="card_container" >
          {codelist
            .filter((array) =>
              array.genre.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((array, key) => {
              if (searchTerm === "") {
                return (
                  <div className="card" key={key}>
                    <span>{array.genre} </span> <div className="card_div_right">
                      <span className="card_slash">|</span> {array.code}</div>
                  </div>

                );
              } else {
                return (
                  <div className="card" key={key}>
                    <span>{array.genre} </span>
                    <div className="card_div_right">
                      <span className="card_slash">|</span>
                      <Link to={array.genre.replace(/ /g, "-").toLowerCase()}>
                        view code
                      </Link>
                    </div>

                  </div>
                );
              }
            })}
        </div>        </div>
    </>
  );
}

export { Search, GenrePage, RelatedGenre, codelist };
