import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

function App() {
  const baseURL = "https://check-forks-f94a762b1338.herokuapp.com/search";
  const [projects, setProjects] = useState([]);
  const [sort, setSort] = useState("stars");

  const { register, handleSubmit } = useForm();

  // const handleSort = useCallback(() => {
  //   const sortProjects = (sort) => {
  //     if (sort === "stars") {
  //       const sortedProjects = [...projects].sort(
  //         (a, b) => b.stargazerCount - a.stargazerCount
  //       );
  //       setProjects(sortedProjects);
  //     } else {
  //       const sortedProjects = [...projects].sort(
  //         (a, b) => b.updatedAt - a.updatedAt
  //       );
  //       setProjects(sortedProjects);
  //     }
  //   };
  //   sortProjects(sort);
  // }, [projects, sort]);
  const onSubmit = async (data) => {
    const response = await axios.post(baseURL, data);
    const finalData = response.data.data.stars.data.repository.forks.nodes;
    console.log(finalData);
    setProjects(finalData);
    console.log(sort);
    // handleSort();
  };

  return (
    <div className="flex flex-col gap-4 justify-center w-full items-center p-4 my-4">
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2 " >
          <input
            className="p-2 border border-gray-400 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            type="text"
            placeholder="Enter project github url"
            {...register("github_url", { required: true })}
          />
          <button
            type="submit"
            className="p-2 w-fit bg-black rounded hover:bg-gray-700 mx-2 text-white "
          >
            Search
          </button>
        </form>

        <div className="flex gap-2 items-center my-2">
          <p>Sort by :</p>
          <p
            onClick={() => setSort("stars")}
            className="p-2 border  rounded cursor-pointer hover:bg-gray-200"
          >
            Stars
          </p>
          <p
            onClick={() => setSort("date")}
            className="p-2 border hover:bg-gray-200 rounded cursor-pointer"
          >
            Updated Date
          </p>{" "}
        </div>
      </div>
      <ul className="flex flex-wrap gap-2 justify-center">
        {projects.length > 0 ? (
          projects.map((project) => (
            <li
              key={project.name}
              className="border p-3 rounded w-[300px] hover:border-blue-500 cursor-pointer  hover:shadow-blue-400"
            >
              <a href={project.url} rel="noreferrer" target="_blank">
                <p className="">
                  Project name: <strong>{project.name}</strong>
                </p>
                <p>Date of Creation : {project.updatedAt}</p>
                <p>Stars : {project.stargazerCount}</p>
              </a>
            </li>
          ))
        ) : (
          <p>No projects found</p>
        )}
      </ul>
    </div>
  );
}

export default App;
