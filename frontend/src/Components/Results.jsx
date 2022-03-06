function Results({ result, confidence }) {
  return (
    <div className="w-full text-center">
      <div
        className={`${
          result === "PASS" ? "bg-green-400 " : "bg-red-600 text-white"
        }`}
      >
        <h1>{result}</h1>
      </div>
      <h2>{confidence}</h2>
    </div>
  );
}

export default Results;
