import { useRef, useState } from "react";
import Results from "../Components/Results";
import useAxios from "../utils/useAxios";

function Detection() {
  const [file, setFile] = useState(null);

  const videoRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const api = useAxios();

  const handleUploadFile = e => {
    const uploadedVideo = e.target.files[0];
    setFile(uploadedVideo);
    const output = document.getElementById("output");
    output.src = URL.createObjectURL(uploadedVideo);
    output.onload = function () {
      URL.revokeObjectURL(output.src);
    };
  };

  const submitVideo = async e => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await api.post("/detection/", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      setLoading(false);
      setResult(response.data.response);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <section className="px-4">
      <h1>Video Detection</h1>
      <hr className="mb-4" />
      <form onSubmit={submitVideo}>
        <label htmlFor="contained-button-file">
          <input
            accept="video/mp4,video/x-m4v,video/*"
            id="contained-button-file"
            ref={videoRef}
            className="my-2"
            onChange={e => handleUploadFile(e)}
            type="file"
          />
        </label>
        <video id="output" className="aspect-video w-1/2 my-4" controls>
          Your browser does not support the video tag.
        </video>
        <button
          className={`t-btn bg-primary text-white text-3xl`}
          disabled={!file || loading}
        >
          {!file ? "Select the video first" : "Test the video"}
        </button>
      </form>
      <div className="mt-4">
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <Results result={result?.output} confidence={result?.confidence} />
        )}
      </div>
    </section>
  );
}

export default Detection;
