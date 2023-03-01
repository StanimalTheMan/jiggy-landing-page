import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Card className="card">
        <CardContent className="card-content">
          <Avatar
            className="card-photo"
            alt="Stan"
            src="static/stan.jpg"
            sx={{ width: 150, height: 150 }}
          />
          <p>
            Hello. I'm <strong>Stan</strong>, a Software Engineer who has worked
            with tools such as React, most recently for a data company, Civis
            Analytics. I am open to new opportunies at this time. Feel free to
            reach me at my email below, and/or check out my LinkedIn and GitHub
            below.
          </p>
          <h4>Email: choi.j.stan@gmail.com</h4>
        </CardContent>
        <CardActions className="card-actions">
          <IconButton
            onClick={() =>
              window.open("https://www.linkedin.com/in/stanchoinym/")
            }
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <IconButton
            onClick={() => window.open("https://github.com/StanimalTheMan")}
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Home;
