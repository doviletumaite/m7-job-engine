import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Star, StarFill } from "react-bootstrap-icons";
import { addToFav, removeFromFav } from "../store/actions";
import { connect, useSelector, useDispatch } from "react-redux";

// const mapStateToProps = (s) => s;

// const mapDispatchToProps = (dispatch) => ({
//   addToFavourites: (company) => dispatch(addToFav(company)),
//   removeFromFavourites: (company) => dispatch(removeFromFav(company))
// });

const JobResult = ({jobData}) => {

  const  favourites = useSelector(state => state.favourites.elements)
   const addToFavourites = useDispatch()
   const removeFromFavourites = useDispatch()
   console.log("dataaaa",jobData)
  const isFav = favourites.includes(jobData.company_name);
  console.log(isFav, favourites);
  const toggleFavourite = () => {
    isFav
      ? removeFromFavourites()
      : addToFavourites();
  };

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3} className="d-flex">
        {isFav ? (
          <StarFill
            color="gold"
            size={16}
            className="me-4 my-auto"
            onClick={toggleFavourite}
          />
        ) : (
          <Star
            color="gold"
            size={16}
            className="me-4 my-auto"
            onClick={toggleFavourite}
          />
        )}
        <Link to={`/${jobData.company_name}`}>{jobData.company_name}</Link>
      </Col>
      <Col xs={9}>
        <Link to={{ pathname: jobData.url }} target="_blank">
          {jobData.title}
        </Link>
      </Col>
    </Row>
  );
}

export default JobResult;
