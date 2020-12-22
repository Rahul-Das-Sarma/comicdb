import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actionCreators/actionCreators";
import "./home.css";
import {Link} from 'react-router-dom';



const Home = (props) => {
  useEffect(() => {
    props.deadpoolcomics();
 
  }, []);


  return (
    <div className="container">
      {props.comics.loading === true ? (
        <div className="loader">
          <div class="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (props.comics.deadpoolComic?
        props.comics.deadpoolComic.data.data.results.map((comic, index) => {
          return (
            <div className="card-container" key={index}>
            <Link style={{textDecoration:"none"}} to={`/comics/${comic.id}`}>
              <img
                className="image-icons"
                src={comic.images[0].path+ `/${'portrait_fantastic'}`+ '.' + comic.images[0].extension}
                alt=""
              />
              </Link>
              <p className="image-title">{comic.title}</p>
            </div>
            
         
          );
        }) : null
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    comics: state.comics,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deadpoolcomics: () => {
      dispatch(actionCreators.DeadpoolComic());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
