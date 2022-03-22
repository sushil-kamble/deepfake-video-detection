function Results({ result, confidence }) {
  return (
    <div
      className={`flex flex-1 items-center rounded-xl shadow-md h-[60%] ${
        result === "FAKE" ? "bg-red-600 text-white " : "bg-green-400"
      }`}
    >
      <div className="w-full text-center">
        <p className="text-xl">This video is</p>
        <h1 className="text-5xl">{result}</h1>
      </div>
    </div>
  );
}

export default Results;
