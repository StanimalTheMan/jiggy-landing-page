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
        <CardContent className="card-photo">
          <Avatar
            alt="Stan"
            src="/static/stan.jpg"
            sx={{ width: "auto", height: "auto" }}
          />
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
