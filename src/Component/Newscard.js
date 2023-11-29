import React from "react";

export default function Newscard(props) {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;

  return (
    <>
      <div>
        <div>
          <div className="card shadow p-3 mb-5 bg-white rounded">
            <div>
              <span className="badge rounded-pill bg-danger"> {source} </span>
            </div>
            <img
              src={
                !imageUrl
                  ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"
                  : imageUrl
              }
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{title} </h5>
              <p className="card-text">{description}</p>
              <p className="card-text">
                <small className="text-muted">
                  By {!author ? "Unknown" : author} on{" "}
                  {new Date(date).toGMTString()}
                </small>
              </p>
              <a
                rel="noreferrer"
                href={newsUrl}
                target="_blank"
                className="btn btn-sm btn-dark"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
