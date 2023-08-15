import { NEW_QUOTE } from "../actionTypes/actionTypes";

const quoteList = [
  {
    quote:
      "You know, Hobbes, some days even my lucky rocketship underpants don't help.",
    author: "Bill Watterson",
  },
  {
    quote:
      "Even if we don't have the power to choose where we come from, we can still choose where we go from there.",
    author: "Stephen Chbosky",
  },
  {
    quote: "And now that you don't have to be perfect, you can be good.",
    author: "John Steinbeck",
  },
  {
    quote:
      "Outside the windows the day was bright: golden sunshine, blue sky, pleasant wind... I wanted to punch the happy day in the face, grab it by the hair, and beat it until it told me what the hell it was so happy about.",
    author: "Ilona Andrews",
  },
  {
    quote:
      "I haven't had a very good day. I think I might still be hungover and everyone's dead and my root beer's gone.",
    author: "Holly Black",
  },
  {
    quote:
      "It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all - in which case, you fail by default.",
    author: "J.K. Rowling",
  },
  {
    quote:
      "But I am very poorly today & very stupid & I hate everybody & everything. One lives only to make blunders.",
    author: "Charles Darwin",
  },
  {
    quote:
      "We are cups, constantly and quietly being filled. The trick is knowing how to tip ourselves over and let the beautiful stuff out.",
    author: "Ray Bradbury",
  },
  {
    quote:
      "Life is never fair, and perhaps it is a good thing for most of us that it is not.",
    author: "Oscar Wilde",
  },
];

export const quoteReducer = (state = quoteList.slice(), action) => {
  switch (action.type) {
    case NEW_QUOTE:
      return {
        quotes: quoteList[Math.floor(Math.random() * quoteList.length - 1) + 1],
        backgroundColor: Math.floor(Math.random() * 16777215).toString(16),
      };

    default:
      return {
        quotes: quoteList[Math.floor(Math.random() * quoteList.length - 1) + 1],
        backgroundColor: Math.floor(Math.random() * 16777215).toString(16),
      };
  }
};
