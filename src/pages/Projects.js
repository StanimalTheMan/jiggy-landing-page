const Projects = () => {
  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>Projects</h1>
      <h2 style={{ display: "flex", justifyContent: "center" }}>
        1. Positives-Vibes-Trainer Analysis
      </h2>
      <p>
        This{" "}
        <a href="https://positive-vibes-trainer-analysis.vercel.app/">app</a>{" "}
        lets you use Clerk to sign up and log in. Once authenticated, you can
        train yourself to be less negative by adding a new journal entry and
        modifying it to summarize the positives of your day. Using AWS
        Comprehend to detect sentiment, OpenAI and Langchain to use some AI to
        analyze entry content, and recharts to make a line graph of positive
        sentiment scores, this app will not let you post a journal entry with
        less than a 50% positive sentiment score. I also got to learn more about
        server vs. client components, file based system routing in Next.js.
      </p>
      <a href="https://positive-vibes-trainer-analysis.vercel.app/">Link</a>
    </div>
  );
};

export default Projects;
