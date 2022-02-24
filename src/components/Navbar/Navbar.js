import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/nike.jpg";
import { BsBag } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { AiOutlineBars } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import HelpLinks from "./HelpLinks";
import { navlinks } from "../../utils/data";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { SiJordan } from "react-icons/si";
import { GiConverseShoe } from "react-icons/gi";
import { GoPackage } from "react-icons/go";
import { BsPatchQuestion } from "react-icons/bs";
import { useUserContext } from "../../context/user_context";
import LogoutAccount from "./LogoutAccount";
import { BsHeart } from "react-icons/bs";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { Badge, IconButton } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import styled from "styled-components";
const Navbar = ({ cart }) => {
  const [showHelpLinks, setShowHelpLinks] = useState(false);
  const [showNavMenu, setShowNavMenu] = useState(false);
  const { logout, user, loginWithRedirect } = useUserContext();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Nav>
      <div className="top-nav-menu">
        <Link
          to="/help"
          className="nav-top-link"
          onMouseEnter={() => setShowHelpLinks(!showHelpLinks)}
        >
          Help
        </Link>
        <div></div>
        <Link to="/joinus" className="nav-top-link">
          Join Us
        </Link>
        {!user && <div></div>}

        {user ? (
          <LogoutAccount logout={logout} user={user} />
        ) : (
          <Link
            to="/login"
            className="nav-top-link"
            style={{ marginRight: "1.2rem" }}
            onClick={loginWithRedirect}
          >
            Sign In
          </Link>
        )}
      </div>
      {showHelpLinks && <HelpLinks setShowHelpLinks={setShowHelpLinks} />}
      <div className="icons-container">
        <img
          src={Logo}
          alt="nike logo"
          style={{
            width: "65px",
            height: "65px",
            margin: "0.2rem 3rem",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        />
        <div
          style={{
            margin: "0.2rem 1rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="nav-links">
            {navlinks.map((link) => {
              return (
                <Link key={link.id} to={link.url} className="nav-link">
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div className="search-bar">
            <FiSearch className="nav-icon search-icon" />
            <input type="text" placeholder="Search" className="nav-search" />
          </div>
          <FiSearch className="nav-icon out-search-icon" />
          <BsHeart className="nav-icon heart-icon" />
          {location.pathname !== "/cart" && (
            <IconButton
              aria-label="Show cart items"
              color="inherit"
              component={Link}
              to="/cart"
            >
              <Badge badgeContent={cart.total_items} color="secondary">
                <ShoppingCart className="nav-icon" />
              </Badge>
            </IconButton>
          )}

          {/* <BsBag className="nav-icon" /> */}

          <AiOutlineBars
            className="nav-icon navbar-icon"
            onClick={() => setShowNavMenu(!showNavMenu)}
          />
        </div>
      </div>
      <div className={showNavMenu ? "show-nav-menu nav-menu" : "nav-menu"}>
        <AiOutlineCloseCircle
          style={{ margin: "1rem 0", cursor: "pointer" }}
          onClick={() => setShowNavMenu(!showNavMenu)}
        />
        {navlinks.map((link) => {
          return (
            <Link key={link.id} to={link.url} className="nav-menu-link">
              <h4>{link.label}</h4>
              <MdOutlineKeyboardArrowRight />
            </Link>
          );
        })}
        <Link
          to="/jordan"
          style={{
            display: "flex",
            margin: "1.5rem 0",
            alignItems: "center",
            color: "#111827",
          }}
        >
          <SiJordan style={{ marginRight: "1rem" }} />
          <p style={{ fontSize: "1.2rem" }}>Jordan</p>
        </Link>
        <Link
          to="/converse"
          style={{
            display: "flex",
            margin: "0rem 0",
            alignItems: "center",
            color: "#111827",
          }}
        >
          <GiConverseShoe style={{ marginRight: "1rem" }} />
          <p style={{ fontSize: "1.2rem" }}>Converse</p>
        </Link>
        <h4
          style={{
            maxWidth: "300px",
            fontSize: "1.2rem",
            marginTop: "4rem",
            opacity: "0.6",
          }}
        >
          Become a Nike Member for the best products, inspiration and stories in
          sport. <Link to="/products">Learn more</Link>
        </h4>
        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          {!user && (
            <Link to="/joinus" className="nav-menu-btn join-us">
              Join Us
            </Link>
          )}

          {!user && (
            <button
              className="nav-menu-btn sign-in"
              style={{ fontSize: "1.1rem" }}
              onClick={loginWithRedirect}
            >
              Sign In
            </button>
          )}
          {user && (
            <button
              className="nav-menu-btn sign-in"
              style={{ fontSize: "1.1rem" }}
              onClick={() => {
                navigate(`/account/${user.email}`);
                setShowNavMenu(false);
              }}
            >
              Account
            </button>
          )}
        </div>
        <div style={{ marginTop: "3rem" }}>
          <Link to="/cart" className="nav-menu-footer-link">
            <BsBag className="nav-menu-footer-icon" />
            <p>Bag</p>
          </Link>
          <Link to="/orders" className="nav-menu-footer-link">
            <GoPackage className="nav-menu-footer-icon" />
            <p>Orders</p>
          </Link>
          <Link to="/help" className="nav-menu-footer-link">
            <BsPatchQuestion className="nav-menu-footer-icon" />
            <p>Help</p>
          </Link>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
const Nav = styled.nav`
  nav {
    position: relative;
  }
  .top-nav-menu {
    position: relative;
    background: var(--mainGray);
    height: 2.4rem;
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    color: var(--mainTextColor);
    font-size: 0.85rem;
    margin-right: 2rem;
  }
  .top-nav-menu div {
    background: var(--mainTextColor);
    width: 1px;
    height: 10px;
    margin: 0 0.5rem;
  }
  .nav-top-link {
    color: var(--mainTextColor);
  }

  .hidden {
    display: none;
  }
  .nav-icon {
    margin-right: 0.7rem;
    font-size: 1.45rem;
    font-weight: 100;
    color: var(--mainTextColor);
    cursor: pointer;
    color: gray;
  }

  .nav-search {
    margin-right: 1rem;
    border-radius: 25px 25px;
    background: var(--mainGray);
    border: none;
    color: #a5a6a7;
    text-align: center;
    height: 2.6rem;
    width: 11rem;
    outline: none;
  }
  .search-icon {
    position: absolute;
    left: 5%;
  }

  .search-bar {
    margin-left: 1.4rem;
    position: relative;
    display: flex;
    align-items: center;
  }
  .nav-links {
    display: flex;
    align-items: center;
  }
  .nav-link {
    color: var(--mainTextColor);
    font-size: 1.1rem;
    font-weight: 500;
    margin: 0 0.8rem;
  }
  .icons-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav-menu {
    position: absolute;
    transition: all 0.3s linear;
    transform: translateX(-100%);
    z-index: 99;
    background: white;
    width: 100%;
    height: 1200px;
    top: 0%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
  }
  .show-nav-menu {
    transform: translateX(0);
    transition: all 0.3s linear;
    transform: translateX(0%);
    z-index: 99;
    text-align: center;
  }
  .nav-menu-link {
    display: flex;
    justify-content: center;
    color: var(--mainTextColor);
    margin: 0.5rem 0;
    width: 100%;
  }
  .nav-menu-link:hover {
    opacity: 0.7;
  }
  .nav-menu-btn {
    width: 7rem;
    height: 2.5rem;
    border-radius: 15px 15px;
    border: none;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .join-us {
    color: white;
    background: black;
    margin-right: 0.25rem;
  }
  .sign-in {
    color: var(--mainTextColor);
    background: white;
    border: 1px solid gray;
    margin-left: 0.25rem;
  }
  .sign-in:hover {
    background: black;
    color: white;
  }
  .nav-menu-footer-link {
    display: flex;
    font-size: 1.3rem;
    color: var(--mainTextColor);
    margin-top: 0.7rem;
  }
  .nav-menu-footer-icon {
    margin-right: 1rem;
  }
  @media screen and (max-width: 900px) {
    .top-nav-menu {
      display: none;
    }
    .search-bar {
      display: none;
    }
    .nav-links {
      display: none;
    }
    .heart-icon {
      display: none;
    }
    /* .filter-container {
    display: none;
  } */
  }

  @media screen and (min-width: 900px) {
    .navbar-icon {
      display: none;
    }
    .out-search-icon {
      display: none;
    }
    .products-top-div {
      display: none;
    }
    .trending img {
      max-height: 900px;
    }
  }
`;
