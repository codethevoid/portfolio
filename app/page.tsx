import { Hero } from "./hero";
import { Projects } from "./projects";

const Home = () => {
  return (
    <div className="p-4">
      <div className="max-w-screen-lg mx-auto space-y-32 mt-32 mb-32">
        <Hero />
        <Projects />
      </div>
    </div>
  );
};

export default Home;
