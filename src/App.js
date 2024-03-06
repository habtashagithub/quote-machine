import React, { useState } from "react";

const quoteData = [
  { text: `"The purpose of our lives is to be happy."`, author: "Dalai Lama" },

  {
    text: `"Life is what happens when you're busy making other plans."`,
    author: "John Lennon",
  },

  { text: ` "Get busy living or get busy dying."`, author: "Stephen King" },

  {
    text: ` "You only live once, but if you do it right, once is enough."`,
    author: "Mae West",
  },

  {
    text: ` "Many of life’s failures are people who did not realize how close they were to success when they gave up."`,
    author: "thomas A. Edison",
  },
];

export default function App() {
  const getRandomIndex = Math.round(
    Math.random() * (quoteData.length - 1 - 0) + 0
  );
  const [quote, setQuote] = useState(quoteData[getRandomIndex]);
  function handleNewQuote() {
    const newIndex = Math.round(Math.random() * (quoteData.length - 1 - 0) + 0);
    setQuote(quoteData[newIndex]);
  }
  return (
    <div>
      <QuoteBox quote={quote} onNewQuote={handleNewQuote} />
    </div>
  );
}
function QuoteBox({ quote, onNewQuote }) {
  return (
    <div>
      <h1>{quote.text}</h1>
      <p>{quote.author}</p>
      <button onClick={onNewQuote}>New Quote</button>
    </div>
  );
}
