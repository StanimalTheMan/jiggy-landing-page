import { Avatar, Button, Card, CardActions, CardContent } from "@mui/material";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Card className="card">
        <CardContent className="card-photo">
          <Avatar
            alt="Stan"
            src="/static/stan.jpg"
            sx={{ width: 150, height: 150 }}
          />
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Home;
