import { Button, styled } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import useAxios from "../utils/useAxios";

function Detection() {
  const [file, setFile] = useState("");
  const [videoSrc, setVideoSrc] = useState("");
  const videoRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const api = useAxios();

  useEffect(() => {
    const src = URL.createObjectURL(new Blob([file]), { type: "video/mp4" });
    setVideoSrc(src);
  }, [file]);

  const submitVideo = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await api.post("/detection/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setLoading(false);
      setResult(response.data.response);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  const Input = styled("input")({
    display: "none",
  });

  return (
    <section className="px-4">
      <h1>This is Detection page</h1>
      <form onSubmit={submitVideo}>
        <label htmlFor="contained-button-file">
          <Input
            accept="video/mp4,video/x-m4v,video/*"
            id="contained-button-file"
            ref={videoRef}
            onChange={(e) => setFile(e.target.files[0])}
            type="file"
          />
          <Button variant="contained" component="span">
            Upload
          </Button>
        </label>
        <Button variant="contained" type="submit">
          Submit
        </Button>
        {file && (
          <h1>
            {file.name} - {videoSrc}
          </h1>
        )}
      </form>
      <div>
        Results:
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <h2>
            Result: {result?.output} Confidence: {result?.confidence}
          </h2>
        )}
      </div>
    </section>
  );
}

export default Detection;
