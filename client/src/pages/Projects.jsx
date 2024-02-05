import CallToAction from "../components/CallToAction";

function Projects() {
  return (
    <div className="min-h-scrren max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <p className="text-md text-gray-500">
        Explore Prashant's Blog's projects – a showcase of innovative coding
        endeavors. From web development to data science, each project represents
        a creative exploration in the world of programming. Dive into these
        concise, impactful creations and get inspired for your coding
        adventures!
      </p>
      <CallToAction />
    </div>
  );
}

export default Projects;
