import { useRef, useState } from "react";
import Results from "../Components/Results";
import useAxios from "../utils/useAxios";
import { LineWave, TailSpin } from "react-loader-spinner";

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
      <div className="flex justify-between h-[60vh] space-x-2">
        <form
          onSubmit={submitVideo}
          className="flex-1 w-1/2 rounded-xl shadow-md p-4 bg-white"
        >
          <p>Select a video file to detect Fake or Real</p>
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
          <video id="output" className="w-full mt-4" controls>
            Your browser does not support the video tag.
          </video>
          <button
            className={`mt-4 t-btn bg-primary text-white text-3xl w-full`}
            disabled={!file || loading}
          >
            {!file ? "Select the video first" : "Test the video"}
          </button>
        </form>
        <div className="w-1/2 flex items-center">
          {loading ? (
            <div className="flex justify-center items-center h-full">
              <TailSpin ariaLabel="loading-indicator" />
            </div>
          ) : (
            <Results result={result?.output} confidence={result?.confidence} />
          )}
        </div>
      </div>
    </section>
  );
}

export default Detection;
