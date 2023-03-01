import { IconButton, Typography } from "@mui/material";
import ChurchIcon from "@mui/icons-material/Church";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import { Link } from "react-router-dom";

function About() {
  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <h2>
          <em>Hobbies</em>
        </h2>
        <Link
          target="_blank"
          rel="noreferrer"
          to="https://nycsummerbaseball.com/stats/?player=stanchoi"
        >
          <Typography variant="h6" component="div">
            <IconButton color="inherit">
              <SportsBaseballIcon fontSize="large" />
              Baseball
            </IconButton>
          </Typography>
        </Link>
      </div>
      <div>
        <h2>
          <em>Faith</em>
        </h2>
        <Link
          target="_blank"
          rel="noreferrer"
          to="https://know-jesus.vercel.app/"
        >
          <IconButton color="inherit">
            <ChurchIcon fontSize="large" />
            Christianity
          </IconButton>
        </Link>
      </div>
    </div>
  );
}

export default About;
