import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./components/navbar";
import DataList from "./components/data";

function GenrePage({ keyword }) {
  const [data] = useState(() => {
    let a = {};
    DataList.forEach((d) => {
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
  let fData = DataList.filter(
    (data) => data.genre.replaceAll("-", " ").toLowerCase() === props.keyword.replace(/-/g, " ")
  );

  if (fData.length === 0) {
    return null;
  }

  fData = fData[0].type;

  return (
    <>
      {DataList
        .filter((Related) => Related.type === fData)
        .map((Related, key) => {
          return (
            <div className="card" key={key}>
              <span className="card_title">{Related.genre} </span>
              <div className="card_div_right">
                <span className="card_slash">|</span>
                <a href={"/" + Related.genre.replace(/ /g, "-").toLowerCase()} >
                  view code
                </a>
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
      <div className="main">
      <div className="main_area">
      <h1>Netflix Genre Codes</h1>
        <div className="search_div">
          <svg className="svg-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7"><g class="search-path" fill="none"><path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4"/><circle cx="8" cy="8" r="7"/></g></svg>
          <input
            className="search_bar"
            type="text"
            placeholder="Search Genre code ..."
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </div>
        <h2>Code List:</h2>{" "}

        <div className="card_container" >
          {DataList
            .filter((array) =>
              array.genre.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((array, key) => {
              if (searchTerm === "") {
                return (
                  <div className="card" key={key}>
                    <span className="card_title">{array.genre} </span> <div className="card_div_right">
                      <span className="card_slash">|</span> {array.code}</div>
                  </div>

                );
              } else {
                return (
                  <div className="card" key={key}>
                    <span className="card_title">{array.genre} </span>
                    <div className="card_div_right">
                      <span className="card_slash">|</span>
                      <Link to={"/" + array.genre.replace(/ /g, "-").toLowerCase()}>
                        view code
                      </Link>
                    </div>

                  </div>
                );
              }
            })}
        </div>        </div></div>
    </>
  );
}

export { Search, GenrePage, RelatedGenre};
