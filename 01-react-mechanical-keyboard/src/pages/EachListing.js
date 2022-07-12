import React from "react";

export default function EachListing (props){
    return(
        <React.Fragment>
            <div>Each Listing{props.data}</div>
        </React.Fragment>
    )
}