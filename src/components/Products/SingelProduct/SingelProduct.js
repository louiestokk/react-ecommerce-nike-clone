import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BsAlarmFill, BsHeart } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useProductsContext } from "../../../context/products_context";
import useStyles from "./styles";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Grid,
} from "@material-ui/core";
import klarna from "../../../images/klarna.jpg";
import { Link } from "react-router-dom";

const SingelProduct = () => {
  const [freeShippHeight, setFreeShippHeight] = useState(false);
  const [reviewHeight, setReviewheight] = useState(false);
  const [reviews, setReviews] = useState(120);
  const [index, setIndex] = useState(0);
  const { products } = useProductsContext();
  const classes = useStyles();
  const { id } = useParams();
  const [product, setProduct] = useState(
    products.filter((el) => el.id == id)[0]
  );

  const handleActive = (e, index) => {
    setIndex(index);
  };

  return (
    <Grid item className={classes.root}>
      {product && (
        <main style={{ height: "1800px" }}>
          <Typography
            variant="h5"
            style={{ marginLeft: "1rem", marginBottom: "0.6rem" }}
          >
            {product.name}
          </Typography>
          <Typography
            variant="h6"
            style={{
              marginLeft: "1rem",
              marginBottom: "1rem",
              fontSize: "1rem",
            }}
          >
            {product.price.formatted_with_symbol}
          </Typography>
          <CardMedia
            className={classes.media}
            title={product.name}
            image={product.assets[index].url}
          />
          <div className={classes.mediaCont}>
            {product.assets.map((el, ind) => {
              return (
                <div key={el.id}>
                  <div
                    key={ind}
                    style={{
                      opacity: index === ind && "0.6",
                    }}
                    className={classes.images}
                    onClick={(e) => handleActive(e, ind)}
                  >
                    <img src={el.url} className={classes.image} />
                  </div>
                </div>
              );
            })}
          </div>
          <div className={classes.sizeCont}>
            <h4
              style={{
                marginLeft: "1rem",
                fontSize: "1.1rem",
                fontWeight: "100",
              }}
            >
              Select Size
            </h4>
            <div
              style={{
                widrh: "100%",
                diplay: "flex",
                textAlign: "center",
              }}
            >
              {product.variant_groups
                .filter((el) => el.name === "size")[0]
                .options.map((el) => el.name)
                .map((btn, ind) => {
                  return (
                    <button key={ind} type="button" className="size-btn">
                      {btn}
                    </button>
                  );
                })}
            </div>
            <div className="add-to-cont">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "2.2rem",
                  marginBottom: "0.5rem",
                }}
              >
                <img src={klarna} alt="klarna" />
                <p
                  style={{
                    marginLeft: "0.2rem",
                    fontSize: "0.8rem",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Smooth shopping
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <button
                  type="button"
                  style={{
                    background: "black",
                    color: "white",
                    border: "none",
                    margin: "0.3rem auto",
                  }}
                >
                  Add to Bag
                </button>
                <button
                  type="button"
                  style={{
                    background: "white",
                    color: "black",
                    border: "1px solid rgb(167, 164, 164)",
                    margin: "0.3rem auto",
                  }}
                >
                  Favorite{" "}
                  <BsHeart
                    style={{
                      marginLeft: "0.3rem",
                      fontSize: "0.9rem",
                      marginTop: "0.17rem",
                    }}
                  />
                </button>
              </div>
              <p
                style={{
                  marginTop: "2.4rem",
                  marginBottom: "1.4rem",
                  lineHeight: "25px",
                  maxWidth: "650px",
                }}
                className="singel-item-decription"
              >
                Tackle your most intense workouts in the Nike Air Max Alpha
                Trainer 4. The wide, flat base with Nike Air cushioning gives
                you comfortable stability for lifting. The heel is redesigned
                with supportive padding that helps take a load off your heaviest
                sets. Everything comes together in a durable shoe built for the
                rigors of the gym.
              </p>
              <div className="singel-item-modal">
                <p>View Product Details</p>
                <div>product details modal hidden, show onclick </div>
              </div>
              {/*  */}
              <div
                className="item-details"
                style={{ height: freeShippHeight ? "6rem" : "3rem" }}
              >
                <div className="item-det-con">
                  <h4 style={{ marginLeft: "0.5rem", fontSize: "1.3rem" }}>
                    Free Shipping & Returns
                  </h4>
                  <MdOutlineKeyboardArrowDown
                    className="item-details-arr"
                    onClick={() => setFreeShippHeight(!freeShippHeight)}
                  />
                </div>
                <p
                  style={{
                    display: freeShippHeight ? "block" : "none",
                    margin: "0 0.5rem",
                    lineHeight: "23px",
                    maxWidth: "90%",
                  }}
                >
                  Free standard shipping and free 60-day returns for Nike
                  Members.{" "}
                  <Link to="/learnmore" className="item-link">
                    Learn more
                  </Link>
                </p>
              </div>
              {/*  */}
              {/*  */}
              <div
                className="item-details"
                style={{ height: reviewHeight ? "6rem" : "3rem" }}
              >
                <div className="item-det-con">
                  <h4 style={{ marginLeft: "0.5rem", fontSize: "1.3rem" }}>
                    Reviews ({reviews})
                  </h4>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div>
                      <BsStarFill
                        style={{ marginRight: "0.3rem", color: "orange" }}
                      />
                      <BsStarFill
                        style={{ marginRight: "0.3rem", color: "orange" }}
                      />
                      <BsStarFill
                        style={{ marginRight: "0.3rem", color: "orange" }}
                      />
                      <BsStarHalf
                        style={{ marginRight: "0.3rem", color: "orange" }}
                      />
                      <BsStar style={{ marginRight: "0.3rem" }} />
                    </div>
                    <MdOutlineKeyboardArrowDown
                      className="item-details-arr"
                      onClick={() => setReviewheight(!reviewHeight)}
                    />
                  </div>
                </div>
                <div
                  style={{
                    display: reviewHeight ? "block" : "none",
                    margin: "0 0.5rem",
                    lineHeight: "23px",
                    maxWidth: "90%",
                  }}
                >
                  <div
                    style={{ transition: "all 0.3s linear", marginTop: "1rem" }}
                  >
                    <h4 style={{ marginBottom: "0.3rem", fontWeight: "100" }}>
                      I like the style
                    </h4>
                    <div style={{ display: "flex", marginBottom: "0.3rem" }}>
                      <BsStarFill
                        style={{ marginRight: "0.3rem", color: "orange" }}
                      />
                      <BsStarFill
                        style={{ marginRight: "0.3rem", color: "orange" }}
                      />
                      <BsStarFill
                        style={{ marginRight: "0.3rem", color: "orange" }}
                      />
                      <BsStarFill
                        style={{ marginRight: "0.3rem", color: "orange" }}
                      />
                      <BsStarFill
                        style={{ marginRight: "0.3rem", color: "orange" }}
                      />
                    </div>
                    <p>
                      This was the first time that I bought a pair of shoes
                      online I really like the shoes in a fit real good I would
                      definitely he buying another pair of shoes from y'all I
                      like Nikes
                    </p>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </main>
      )}
    </Grid>
  );
};

export default SingelProduct;

// 2 col layout 1. product bilderna och info 2. storlek,klarna text,2 knappar add o favorite, sen product description
// jag kan ta products från context och baar köra filter
// välj storlek måste lägga in size 36,36,38 på utvald product samma som den med många bilder
// render knappar med storlekar
// lägg till korg knapp som måste regist vilken product genom id och storlek
// knapp till add favorite men måste va inloggad, samma där spara favorite o localstorage eller kolla commrce om de har stöd
// lagra det man lagt till i korgen , men dettta gör commerce 436571-9858-26
