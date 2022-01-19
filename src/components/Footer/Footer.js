import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import { footerlinkscol1 } from "../../utils/data";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { ImYoutube2 } from "react-icons/im";
import { TiSocialInstagram } from "react-icons/ti";
const Footer = () => {
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
        <div>Get Help</div>
        <div>Get Help</div>
        <div className={classes.icons}>
          <div>
            <BsTwitter />
          </div>
          <div>
            <FaFacebookF />
          </div>
          <div>
            <ImYoutube2 />
          </div>
          <div>
            <TiSocialInstagram />
          </div>
        </div>
      </article>
    </section>
  );
};

export default Footer;
