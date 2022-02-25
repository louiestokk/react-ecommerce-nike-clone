import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
const LogoutAccount = ({ logout, user }) => {
  const [showAccount, setShowAccount] = useState(false);
  return (
    <Wrapper>
      <div>
        <img
          src={user.picture}
          alt="user account"
          onClick={() => setShowAccount(!showAccount)}
        />
        {showAccount && (
          <article>
            <section
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                marginTop: "2rem",
                borderBottom: "1px solid #111827",
                width: "100%",
              }}
            >
              <img
                src={user.picture}
                alt="user account"
                style={{
                  marginBottom: "0.5rem",
                  height: "35px",
                  width: "35px",
                }}
              />
              <main style={{ marginBottom: "0.5rem" }}>
                <h4 style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                  Welcome
                </h4>
                <h4 style={{ fontSize: "0.95rem", opacity: "0.6" }}>
                  {user.name}
                </h4>
              </main>
            </section>

            <Link
              to={`/account/${user.name}`}
              onClick={() => setShowAccount(!showAccount)}
            >
              Account
            </Link>
            <button
              className="nav-menu-btn sign-in"
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Logout
            </button>
          </article>
        )}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  position: relative;

  div {
    display: flex;
    // flex-direction: column;
    // justify-content: center;
    align-items: center;
  }
  section {
    text-align: center;
  }
  button:hover {
    background: black;
    color: white;
  }
  img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin-left: 0.5rem;
    cursor: pointer;
  }
  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 99;
    position: absolute;
    width: 20rem;
    height: 22rem;
    border-radius: 10px 10px;
    color: black;
    top: 300%;
    background: white;

    a {
      color: #111827;
      opacity: 0.6;
      margin: 2rem 1.4rem;
      font-size: 1.2rem;
      cursor: pointer;
      border-bottom: 1px solid #111827;
    }
    a:hover {
      opacity: 1;
    }
    h4 {
      font-size: 1.1rem;
    }
  }
`;
export default LogoutAccount;
