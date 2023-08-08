import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [quotes, setQuotes] = useState("");
  let colors=["#facc15","#4ade80","#0891b2","#c084fc","#e11d48","#dc2626"];
  const [color,setColor]=useState("");
  const getQuotes = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length);
        setQuotes(data[randomNum]);
        setColor(colors[Math.floor(Math.random() * colors.length)]);
      });
  };
  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <div className="max-w-sm absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        QuoteQuest
      </h5>

      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
      Unleashing a cascade of thought-provoking words at your fingertips, QuoteQuest offers a daily dose of insight, positivity, and surprise.
      </p>
      <div>
        <p className={`mb-3 text-${color}-500 dark:text-gray-400 font-bold`}>{quotes.text}</p>
        <p className={`mb-3 text-${color}-500 dark:text-gray-400 font-bold`}> ~{quotes && quotes.author.slice(0,((quotes.author).length)-9)}</p>
      </div>
      <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <button
          onClick={getQuotes}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Get Quote
        </button>
        <a
          href={`https://twitter.com/intent/tweet?text=${quotes}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Tweet
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default App;
