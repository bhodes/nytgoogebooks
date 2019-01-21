import React from "react";

const GoogleBooks = props => {
  const book = {
    title: props.title,
    authors: props.authors,
    description: props.description,
    image: props.image,
    link: props.link
  };
  return (
    <div className="row">
      <div className="col border border-secondary m-1 p-2">
        <div className="row">
          <div className="col mx-auto">
            <h2>{props.title}</h2>
            <h4>{props.authors.join(", ")}</h4>
          </div>
          <div className="col text-right">
            <button className="btn btn-primary">View</button>

    
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="col">{props.description}</div>
        </div>
      </div>
    </div>
  );
};

export default GoogleBooks;