import React, { useEffect, useState } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { readDeck } from "../utils/api";

function CreateStudyPage(props) {
  
    return (
        <>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">
                <span className="oi oi-home" /> Home
              </Link>
                    </li>
                
            <li className="breadcrumb-item" aria-current="page">
                        <Link to={`/decks/${props.id}/study`}>
                            {props.name}
                    </Link>
                    </li>
                    <li className="breadcrumb-item active">
                        Study
                    </li>
          </ol>
            </nav>
            </>
)
}

export default CreateStudyPage