import React from "react";
import { helplinks } from "../../utils/data";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";
const HelpLinks = ({ setShowHelpLinks }) => {
  return (
    <Wrapper>
      <div>
        <h4>Help</h4>
        <AiOutlineCloseCircle
          className="help-link"
          onClick={() => setShowHelpLinks(false)}
        />
      </div>
      {helplinks.map((link) => {
        const { label, id, url } = link;
        return (
          <Link to={url} key={id} className="help-link">
            {label}
          </Link>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  z-index: 99;
  position: absolute;
  background: white;
  width: 16rem;
  height: 22rem;
  border-radius: 10px 10px;
  right: 14%;
  .help-link {
    color: #111827;
    opacity: 0.6;
    margin: 0.25rem 1.4rem;
    font-size: 1rem;
    cursor: pointer;
  }
  .help-link:hover {
    opacity: 1;
  }
  h4 {
    margin: 1.2rem 1.4rem;
    color: #111827;
    letter-spacing: 0.5px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export default HelpLinks;
