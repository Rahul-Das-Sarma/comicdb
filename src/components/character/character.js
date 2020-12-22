import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actionCreators/actionCreators";
import "./character.css";

const Character = (props) => {
  const characterNameAsId = props.match.params.id;

  const upperCaseCharacterName = characterNameAsId.toUpperCase();

  console.log(props.showCharacterInfo);
  useEffect(() => {
    props.onSelectedCharacterInfo(upperCaseCharacterName);
  }, [props.onSelectedCharacterInfo]);

  return (
    <div className="character-container">
      {props.showCharacterInfo.loading === true ? (
        <div className="loader">
          <div class="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <div className="hero-container">
          <img
            className="hero-image"
            src={
              props.showCharacterInfo.characterInfo
                ? props.showCharacterInfo.characterInfo.data.data.results[0]
                    .thumbnail.path +
                  `/${"portrait_incredible"}` +
                  "." +
                  props.showCharacterInfo.characterInfo.data.data.results[0]
                    .thumbnail.extension
                : null
            }
            alt=""
          />
          <div className="decription-container">
            <h1 className="description__name">
              {props.showCharacterInfo.characterInfo
                ? props.showCharacterInfo.characterInfo.data.data.results[0].name : null}
            </h1>
            <div className="btn__link__container">
              <a
                href={
                  props.showCharacterInfo.characterInfo.data.data.results[0]
                    .urls[0].url
                }
                target="blank"
              >
                {" "}
                <button className="btn btn-primary">wiki</button>
              </a>
              <a
                href={
                  props.showCharacterInfo.characterInfo.data.data.results[0]
                    .urls[2].url
                }
                target="blank"
              >
                
                <button className="btn btn-secondary">comics</button>
              </a>
            </div>
            <p className="descriptio__para">
              <q className="quotes">
                &nbsp;
                {
                  props.showCharacterInfo.characterInfo.data.data.results[0]
                    .description
                }
                &nbsp;
              </q>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    showCharacterInfo: state.characters,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSelectedCharacterInfo: (upperCaseCharacterName) => {
      dispatch(actionCreators.characterInfo(upperCaseCharacterName));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Character);
