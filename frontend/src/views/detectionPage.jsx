import { Button, Input } from "@mui/material";

function Detection() {
  return (
    <div>
      <h1>This is Detection page</h1>
      <label htmlFor="contained-button-file">
        <Input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
        />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>
    </div>
  );
}

export default Detection;
