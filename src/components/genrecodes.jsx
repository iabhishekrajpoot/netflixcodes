import React, { useState } from "react";
import { Link } from "react-router-dom";
import DataList from "./data";

function GenrePage({ keyword }) {
  const [data] = useState(() => {
    let a = {};
    DataList.forEach((d) => {
      if (
        d.genre.replaceAll("-", " ").toLowerCase() === keyword.replaceAll("-", " ").toLowerCase()
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
            <div className="gpage_code_block_ddiv"><span className="gpage_code_block_span" >code:</span> {data.code} <span className="gpage_code_block_span"><a href={"https://netflix.com/browse/genre/" + data.code}>Open on NetFlix <svg xmlns='http://www.w3.org/2000/svg'
              strokeWidth='10' strokeDashoffset='0'
              strokeDasharray='0' strokeLinecap='round'
              strokeLinejoin='round' viewBox='0 0 100 100'>
              <polyline fill="none" points="40 20 20 20 20 90 80 90 80 60" />
              <polyline fill="none" points="60 10 90 10 90 40" />
              <line fill="none" x1="89" y1="11" x2="50" y2="50" />
            </svg></a></span></div>
          </div>
          <div className="gpage_code_block discription">{data.description}</div>
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
      <div className="search_div">
        <svg className="svg-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7"><g fill="none"><path strokeLinecap="square" d="M18.5 18.3l-5.4-5.4" /><circle cx="8" cy="8" r="7" /></g></svg>
        <input
          className="search_bar"
          type="text"
          placeholder="Search Genre code ..."
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>
      <h2 className="label">Code List:</h2>{" "}

      <div className="card_container" >
        {DataList
          .filter((array) =>
            array.genre.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((array, key) => {
            if (searchTerm === "") {
              return (
                <div className="card" key={key}>
                  <span className="card_title">{array.genre} </span>
                  <div className="card_div_right">
                    <span className="card_slash">|</span> 
                   <Link className="linkto" to={"/" + array.genre.replace(/ /g, "-").toLowerCase()}>{array.code}</Link>
                  </div>
                </div>

              );
            } else {
              return (
                <div className="card" key={key}>
                  <span className="card_title">{array.genre} </span>
                  <div className="card_div_right">
                    <span className="card_slash">|</span>
                    <Link className="linkto" to={"/" + array.genre.replace(/ /g, "-").toLowerCase()}>
                      view code
                    </Link>
                  </div>

                </div>
              );
            }
          })}
      </div>
    </>
  );
}

export { Search, GenrePage, RelatedGenre };
