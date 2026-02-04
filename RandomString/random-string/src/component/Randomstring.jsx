import { useState, useCallback } from "react";

function Randomstring() {
  const [length, setLength] = useState(""); 
  const [randomString, setRandomString] = useState("");

  const generateString = useCallback(() => {
    if (length <= 0) {
      setRandomString(""); 
      return;
    }

    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setRandomString(result);
  }, [length]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md transform hover:scale-105 transition-transform duration-300">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-800 tracking-wide">
          Random String Generator
        </h1>

        <input
          type="number"
          min="0"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-700 font-medium placeholder-gray-400"
          placeholder="Enter length"
        />

        <button
          onClick={generateString}
          className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg hover:from-purple-600 hover:to-pink-500 shadow-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
        >
          Generate
        </button>

        <p className="mt-6 text-center break-all font-mono text-gray-700 text-lg bg-gray-100 p-4 rounded-lg shadow-inner">
          {randomString || "Your random string will appear here"}
        </p>
      </div>
    </div>
  );
}

export default Randomstring;
