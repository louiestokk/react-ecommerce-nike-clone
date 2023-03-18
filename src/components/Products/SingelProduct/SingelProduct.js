import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { BsHeart } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useProductsContext } from "../../../context/products_context";
import useStyles from "./styles";
import { CardMedia, Typography, Grid } from "@material-ui/core";
import klarna from "../../../images/klarna.jpg";
import { Link } from "react-router-dom";
import RelatedProducts from "../RelatedProducts/RelatedProducts";
export const sizeandid = [];
const SingelProduct = ({ handleAddToCart, setOrder, order }) => {
  const [freeShippHeight, setFreeShippHeight] = useState(false);
  const [reviewHeight, setReviewheight] = useState(false);
  const [reviews, setReviews] = useState(120);
  const [index, setIndex] = useState(0);
  const [details, setdetails] = useState(false);
  const { products } = useProductsContext();
  const classes = useStyles();
  const { id } = useParams();
  const [product, setProduct] = useState(
    products.filter((el) => el.id === id)[0]
  );

  const handleActive = (e, index) => {
    setIndex(index);
  };

  return (
    <Grid item className={classes.root}>
      {product && (
        <main className={classes.subroot}>
          <div className={classes.subimagecont}>
            <div>
              <Typography
                variant="h5"
                style={{ marginLeft: "1rem", marginBottom: "0.6rem" }}
              >
                {product.name}
              </Typography>
              <Typography
                variant="p"
                style={{
                  marginLeft: "1rem",
                  marginBottom: "1rem",
                  fontSize: "1rem",
                  textDecoration: "line-through",
                  color: "gray"
                }}
              >
                kr{product?.price?.raw * 1.5}.00
              </Typography>
              <Typography
                variant="h6"
                style={{
                  marginLeft: "1rem",
                  marginBottom: "1rem",
                  fontSize: "1rem",
                  color: "red"
                }}
              >
                {product?.price?.formatted_with_symbol}
              </Typography>
            </div>

            <CardMedia
              className={classes.media}
              title={product?.name}
              image={product?.image.url}
              style={{ height: product.name.includes("Twin") && "290px" }}
            />
            {/* <div className={classes.mediaCont}>
              {product?.assets?.map((el, ind) => {
                return (
                  <div key={el.id}>
                    <div
                      key={ind}
                      style={{
                        opacity: index === ind && "0.6"
                      }}
                      className={classes.images}
                      onClick={(e) => handleActive(e, ind)}
                    >
                      <img src={el.url} className={classes.image} />
                    </div>
                  </div>
                );
              })}
            </div> */}
          </div>

          <div className={classes.sizeCont}>
            <h4
              style={{
                marginLeft: "1rem",
                fontSize: "1.1rem",
                fontWeight: "100"
              }}
            >
              All in one 👶🏼
            </h4>
            <div
              style={{
                widrh: "100%",
                diplay: "flex",
                textAlign: "center"
              }}
            >
              {product?.variant_groups
                ?.filter((el) => el?.name === "size")[0]
                .options.map((el) => el?.name)
                .map((btn, ind) => {
                  return (
                    <button
                      key={ind}
                      type="button"
                      className="size-btn"
                      onClick={() => setOrder({ ...order, size: btn })}
                    >
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
                  marginBottom: "0.5rem"
                }}
              >
                <img src={klarna} alt="klarna" />
                <p
                  style={{
                    marginLeft: "0.2rem",
                    fontSize: "0.8rem",
                    fontWeight: "bold",
                    color: "black"
                  }}
                >
                  Smooth shopping
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <button
                  className="add-to-cart-btn"
                  type="button"
                  style={{
                    background: "black",
                    color: "white",
                    border: "none",
                    margin: "0.3rem auto"
                  }}
                  onClick={(e) => {
                    setOrder({ ...order, id: product.id });
                    handleAddToCart(product.id, 1);
                    sizeandid.push(order);
                    e.target.textContent = "Added to Cart";
                    e.target.disabled = true;
                  }}
                >
                  Add to cart
                </button>
                <button
                  type="button"
                  style={{
                    background: "white",
                    color: "black",
                    border: "1px solid rgb(167, 164, 164)",
                    margin: "0.3rem auto"
                  }}
                >
                  Favorite
                  <BsHeart
                    style={{
                      marginLeft: "0.3rem",
                      fontSize: "0.9rem",
                      marginTop: "0.17rem"
                    }}
                  />
                </button>
              </div>
              <p
                style={{
                  marginTop: "2.4rem",
                  marginBottom: "1.4rem",
                  lineHeight: "25px",
                  maxWidth: "650px"
                }}
                className="singel-item-decription"
              >
                High-quality strollers with all the accessories you need for
                your stroller. With us, you get a cot, seat, diaper bag, cup
                holder, rain cover and mosquito net. Car seat and isofix can be
                bought with every stroller.
              </p>
              <div
                className="item-details"
                style={{ height: details ? "100%" : "3rem" }}
              >
                <div className="item-det-con">
                  <h4 style={{ marginLeft: "0.5rem", fontSize: "1.3rem" }}>
                    Product Details
                  </h4>
                  <MdOutlineKeyboardArrowDown
                    className="item-details-arr"
                    onClick={() => setdetails(!details)}
                  />
                </div>
                <p
                  style={{
                    display: details ? "block" : "none",
                    margin: "0 0.5rem",
                    lineHeight: "23px",
                    maxWidth: "90%"
                  }}
                  dangerouslySetInnerHTML={{ __html: product?.description }}
                >
                  {/* <Link to="/learnmore" className="item-link">
                    Learn more
                  </Link> */}
                </p>
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
                    maxWidth: "90%"
                  }}
                >
                  Free standard shipping and free 60-day returns for Members.{" "}
                </p>
              </div>
              {/*  */}
              {/*  */}
              <div
                className="item-details"
                style={{
                  height: reviewHeight ? "6rem" : "3rem"
                }}
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
                    maxWidth: "90%"
                  }}
                >
                  <div
                    style={{
                      transition: "all 0.3s linear",
                      marginTop: "1rem",
                      marginBottom: "3rem"
                    }}
                  >
                    <h4 style={{ marginBottom: "0.3rem", fontWeight: "100" }}>
                      Great pram and stylish
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
                      Great stroller in every way. I got everything I needed and
                      the delivery went smoothly. I highly recommend this
                      stroller.
                    </p>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </main>
      )}

      <RelatedProducts product={product} />
    </Grid>
  );
};

export default SingelProduct;
