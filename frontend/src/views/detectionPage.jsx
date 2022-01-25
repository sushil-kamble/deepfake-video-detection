import { Button, styled } from "@mui/material";
import { useEffect, useRef, useState } from "react";

function Detection() {
  const [file, setFile] = useState("");
  const [videoSrc, setVideoSrc] = useState("");
  const videoRef = useRef(null);

  useEffect(() => {
    const src = URL.createObjectURL(new Blob([file]), { type: "video/mp4" });
    setVideoSrc(src);
  }, [file]);

  const Input = styled("input")({
    display: "none"
  });

  return (
    <section className="px-4">
      <h1>This is Detection page</h1>
      <form>
        <label htmlFor="contained-button-file">
          <Input
            accept="video/mp4,video/x-m4v,video/*"
            id="contained-button-file"
            ref={videoRef}
            onChange={e => setFile(e.target.files[0])}
            type="file"
          />
          <Button variant="contained" component="span">
            Upload
          </Button>
        </label>
        {file && <video width="400" src={videoSrc} controls className="mt-4" />}
      </form>
    </section>
  );
}

export default Detection;
