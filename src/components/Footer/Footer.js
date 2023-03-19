import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import { footerlinkscol1 } from "../../utils/data";
import { footerlinkscol2 } from "../../utils/data";
import { footerlinkscol3 } from "../../utils/data";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { BiMap } from "react-icons/bi";
import { TiSocialInstagram } from "react-icons/ti";
const Footer = () => {
  // max-width 644
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <article className={classes.container}>
        <div className={classes.links}>
          {footerlinkscol1.map((link) => {
            const { id, url, label } = link;
            return (
              <Link key={id} to={url} className={classes.link}>
                {label}
              </Link>
            );
          })}
        </div>
        <div className={classes.links}>
          <Link to="/" className={classes.link}>
            GET HELP
          </Link>
          {footerlinkscol2.map((link) => {
            const { id, url, label } = link;
            return (
              <Link key={id} to={url} className={classes.sublink}>
                {label}
              </Link>
            );
          })}
        </div>
        <div className={classes.links}>
          <Link to="/" className={classes.link}>
            ABOUT US
          </Link>
          {footerlinkscol3.map((link) => {
            const { id, url, label } = link;
            return (
              <Link key={id} to={url} className={classes.sublink}>
                {label}
              </Link>
            );
          })}
        </div>
        <div className={classes.icons}>
          <div className={classes.iconcont}>
            <BsTwitter className={classes.icon} />
          </div>
          <div className={classes.iconcont}>
            <FaFacebookF className={classes.icon} />
          </div>
          <div className={classes.iconcont}>
            <TiSocialYoutubeCircular className={classes.icon} />
          </div>
          <div className={classes.iconcont}>
            <TiSocialInstagram className={classes.icon} />
          </div>
        </div>
      </article>
      <div className={classes.divider}></div>
      <div>
        <div className={classes.bottomlinks}>
          <Link to="/guides" className={classes.bottomlink}>
            Guides
          </Link>
          <Link to="/terms" className={classes.bottomlink}>
            Terms of State
          </Link>
          <Link to="/terms" className={classes.bottomlink}>
            Terms of Use
          </Link>
          <Link to="/policy" className={classes.bottomlink}>
            Privacy Policy
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            alingItems: "center",
            justifyContent: "space-between",
            fontSize: "0.7rem",
            marginTop: "2rem"
          }}
        >
          <div
            style={{
              display: "flex",
              marginLeft: "1rem",
              alignItems: "center"
            }}
          >
            <BiMap
              style={{
                marginRight: "0.3rem",
                opacity: "1",
                fontSize: "1.2rem"
              }}
            />
            <p
              style={{
                fontSize: "0.7rem",
                opacity: "0.7",
                letterSpacing: "1px"
              }}
            >
              Sweden/Denmark{" "}
            </p>
            <br style={{ marginRight: "1rem" }} />
            <p style={{ opacity: "0.5" }}>
              &copy; {new Date().getFullYear()} Stokk Tech Limited, All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
