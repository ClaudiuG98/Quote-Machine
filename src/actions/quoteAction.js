import { NEW_QUOTE } from "../actionTypes/actionTypes";

const getNewQuote = () => {
  return {
    type: NEW_QUOTE,
  };
};

export { getNewQuote };
