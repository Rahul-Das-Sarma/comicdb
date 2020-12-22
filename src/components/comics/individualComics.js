import React, { useEffect } from "react";
import "./comics.css";
import { connect } from "react-redux";
import * as actionCreator from "../../store/actionCreators/actionCreators";

function IndividualComics(props) {
  const comicID = props.match.params.id;

  useEffect(() => {
    props.onRecieveID(comicID);
  }, [props.onRecieveID]);
  
  return (
    <div className="comic-container">
      {props.showComics.loading === true ? (
        <div className="loader">
          <div class="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <div className="comic-info-container">
          <img
            className="hero-image"
            src={
              props.showComics.selectedComic
                ? props.showComics.selectedComic.data.data.results[0].images[0]
                    .path +
                  `/${"portrait_incredible"}` +
                  "." +
                  props.showComics.selectedComic.data.data.results[0].images[0]
                    .extension
                : null
            }
            alt=""
          />
          <div className="comic-description">
            <h1>
              {props.showComics.selectedComic
                ? props.showComics.selectedComic.data.data.results[0].title
                : null}
            </h1>
            <a
              href={
                props.showComics.selectedComic
                  ? props.showComics.selectedComic.data.data.results[0].urls[0]
                      .url
                  : null
              }
              target="blank"
            >
              {" "}
              <button className="btn btn-primary">Detail</button>{" "}
            </a>
            <a
              href={
                props.showComics.selectedComic
                  ? props.showComics.selectedComic.data.data.results[0].urls[0]
                      .url
                  : null
              }
              target="blank"
            >
            <button className="btn btn-secondary">Purchase</button>
            </a>
            <p className="descriptio__comicpara">
              <q className="quotes">
                {" "}
                &nbsp; Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum. &nbsp;
              </q>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    showComics: state.comics,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onRecieveID: (comicID) => {
      dispatch(actionCreator.individualComic(comicID));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(IndividualComics);
