import React, { useState } from "react";

const codelist = [
    { genre: "Adventures", code: "7442", "type": "Adventures" },
    { genre: "Westerns", code: "7700", "type": "Adventures" },
    { genre: "Hijacking movies", code: "20541", "type": "Adventures" },
    { genre: "Action thrillers", code: "43048", "type": "action" },
    { genre: "Asian action movies", code: "77232", "type": "Adventures" },
    { genre: "Westerns", code: "7700", "type": "action" },
]

const GenrePage = (props) => {
    return (
        <>
            {codelist
                .filter((data) => {
                    if (data.genre.toLowerCase().includes(props.keyword.replace(/-/g, " ").toLowerCase())) {
                        return data
                    }
                })
                .map((data, key) => {
                    return (<div key={key}>
                        <h2>genre: {data.genre}</h2>
                        <h3>code: {data.code}</h3></div>)
                })}
        </>
    )
};

const RelatedGenre = (props) => {
    const fData = codelist.filter(data => data.genre.toLowerCase() === props.keyword.replace(/-/g, " "))[0].type
    return (<>
        <h3>Related keywords:  {
            codelist.filter((data) => {
                if (data.type === fData) {
                    return data
                }
            }
            ).map((data, key) => {
                return (<div key={key}>
                    <span> {data.genre}</span>
                    <p>code: {data.code}</p>
                </div>)
            })
        } </h3>
    </>)
}


const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    return (<>
        <input type="text" placeholder="search.." onChange={(e) => { setSearchTerm(e.target.value) }} />
        {codelist
            .filter((array) => {
                if (searchTerm === "") {
                    return array
                } else if (array.genre.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return array
                }
            })
            .map((array, key) => {
                if (searchTerm === "") {
                    return (<div key={key}>
                        <h2>genre: {array.genre}</h2>
                        <h3>code: {array.code}</h3></div>)
                }
                else {
                    return (<div key={key}>
                        <h2>genre: {array.genre}</h2>
                        <h3><a href={array.genre.replace(/ /g, "-").toLowerCase()}>view code</a></h3></div>)
                }
            })}
    </>)
}



export { Search, GenrePage, RelatedGenre, codelist };