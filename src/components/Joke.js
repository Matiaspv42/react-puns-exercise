import React from "react";


export default function Joke(props){
    console.log(props)
    return(
        <div className="joke">
            <p>{props.setup}</p>
            <p>{props.punchline}</p>
            <hr />
        </div>
    )
}