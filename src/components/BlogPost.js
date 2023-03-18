import React from "react";
import { useParams } from "react-router-dom";
import { blogposts } from "../utils/blogdata";
const BlogPost = () => {
  const { blogid } = useParams();
  const item = blogposts?.filter(
    (el) => el?.blogid === Number(blogid ? blogid : 102)
  );

  return (
    <div>
      {item?.map((el) => {
        const { date, title, description, path, url } = el;
        return (
          <div
            key={el.blogid}
            style={{
              textAlign: "center",
              borderTop: "1px solid lightgray",
              marginTop: "1rem"
            }}
          >
            <p className="popular-products-title" style={{ marginTop: "1rem" }}>
              {date}
            </p>
            <h1
              className="post-title"
              style={{ maxWidth: "300px", margin: "0.5rem auto" }}
            >
              {title}
            </h1>
            <img
              src={url}
              alt={title}
              style={{ width: "300px", height: "300px", margin: "0.5rem 0" }}
            />
            <p
              className="popular-products-title"
              style={{
                letterSpacing: "1px",
                width: "90%",
                margin: "1rem auto"
              }}
            >
              {description}
            </p>
            <button
              style={{
                border: "1px solid black",
                marginTop: "0.5rem",
                height: "2.4rem",
                width: "7rem",
                background: "transparent",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              <a
                href="/barnvagnar/accessories/tillbehor"
                style={{
                  color: "black"
                }}
              >
                Shop Now
              </a>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default BlogPost;
