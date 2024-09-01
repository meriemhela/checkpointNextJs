import { experiences } from "../data/data";

function Timeline() {
  return (
    <div className="relative container mx-auto p-4">
      <div className="border-l-2 border-gray-300 absolute left-1/2 h-full transform -translate-x-1/2"></div>
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`mb-8 flex justify-between items-center w-full ${
            experience.destination === "left" ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <div className="w-5/12"></div>
          <div className="relative w-5/12 bg-white p-6 shadow-lg rounded-lg">
            <div className="font-semibold text-xl">{experience.title}</div>
            <div className="text-gray-500">{experience.company}</div>
            <div className="text-sm text-red-400">{experience.date}</div>
            <div className="mt-4">{experience.description}</div>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 bg-white w-8 h-8 rounded-full border-4 border-red-400 z-10"></div>
        </div>
      ))}
    </div>
  );
}

export default Timeline;
