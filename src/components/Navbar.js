import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import resumePDF from "./01_Stan_Resume.pdf";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ background: "000" }} position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link to="/">
              <Typography variant="h6" component="div">
                <Button color="inherit">Home</Button>
              </Typography>
            </Link>
          </Typography>
          <Link to="/about">
            <Button color="inherit">About</Button>
          </Link>
          <Link to="/projects">
            <Button color="inherit">Projects</Button>
          </Link>
          <Button
            color="inherit"
            href={resumePDF}
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
