import { Typography } from "@mui/material";

function Resume() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>
        <em>Portfolio</em>
      </h2>
      <ul style={{ display: "inline-block" }}>
        <li style={{ textAlign: "left" }}>
          <Typography variant="h6" component="div">
            <a href="https://rate-mlb-stadium.herokuapp.com/">RateMLBStadium</a>
          </Typography>
        </li>
        <li style={{ textAlign: "left" }}>
          <Typography variant="h6" component="div">
            <a href="https://elegant-pavlova-3a0829.netlify.app/">
              WhatsAppClone
            </a>
          </Typography>
        </li>
        <li style={{ textAlign: "left" }}>
          <Typography variant="h6" component="div">
            <a href="https://know-jesus.vercel.app/">KnowJesus</a>
          </Typography>
        </li>
      </ul>
      <hr />
      <h2>
        <em>Tech Experience</em>
      </h2>
      <Typography variant="h6" component="div">
        <strong>Software Engineer 1 (Civis Analytics)</strong>
      </Typography>
      <p>November 2021 - November 2022</p>
      <ul style={{ display: "inline-block" }}>
        <li style={{ textAlign: "left" }}>
          Utilized technologies such as TypeScript React and Ruby on Rails to
          implement features and fix bugs for a data platform product
        </li>
        <li>
          Followed responsive design techniques such as Container Queries/Resize
          Observer API and Material UI to satisfy clients in their usage of data
          exploration tool
        </li>
      </ul>
      <br />
      <br />
      <br />
      <Typography variant="h6" component="div">
        <strong>Web Developer (OEMA of West Point)</strong>
      </Typography>
      <p>August 2020 - February 2021</p>
      <ul style={{ display: "inline-block" }}>
        <li>
          Mocked desings of the to-be reimplemented cadets' website using web
          technologies such as Vue and Flask
        </li>
      </ul>
      <hr />
      <h2>
        <em>Education</em>
      </h2>
      <Typography variant="h6" component="div">
        <strong>NYU</strong>
      </Typography>
      <ul style={{ display: "inline-block" }}>
        <li style={{ textAlign: "left" }}>September 2015 - May 2019</li>
        <li>Bachelors in Computer Science</li>
      </ul>
    </div>
  );
}

export default Resume;
