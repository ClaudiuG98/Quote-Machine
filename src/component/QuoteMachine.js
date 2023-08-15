/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNewQuote } from "../actions/quoteAction";


const QuoteMachine = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const color = "#" + state.backgroundColor;
  console.log(color);
  const quoteBoxStyle = {
    borderRadius: "10px",
    width: "500px",
    overflowWrap: "break-word",
    color: color,
  };

  return (
    <div className="d-flex justify-content-center align-items-center" 
        style={{ backgroundColor: "#" + state.backgroundColor, height: "100vh" }}>
      <div className="p-2 m-5" style={quoteBoxStyle} id="quote-box">
        <h2 className="text-center m-2" id="text">
          {state.quotes.quote}
        </h2>
        <p className="text-end m-2" id="author">
          -{state.quotes.author}
        </p>
        <button
          className="btn"
          id="tweet-quote"
          title="Tweet this quote!"
          style={{ backgroundColor: "#" + state.backgroundColor }}
        >
          <a href="https://twitter.com/intent/tweet" target="_blank"><i className="fa fa-twitter"></i></a>
          
        </button>

        <button
          className="btn float-end"
          id="new-quote"
          onClick={() => {
            dispatch(getNewQuote());
          }}
          style={{ backgroundColor: "#" + state.backgroundColor }}
        >
          New Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteMachine;
