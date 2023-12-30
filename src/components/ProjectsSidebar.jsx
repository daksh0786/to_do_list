import Button from "./Button";

const ProjectsSidebar = (props) => {
  return (
    <aside className="w-1/3 px-8 bg-stone-900 py-16 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-old uppercase md:text-xl text-stone-200">
        project Name
      </h2>

      <div>
        <Button
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:pg-stone-600 hover:text-stone-100"
          onClick={props.onStartAddProject}
        >
          + ADD Projects
        </Button>
      </div>
      <ul className="mt-8">
        {props.projects.map((project) => (
          <li key={project.id}>
            <button className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800 " onClick = {() =>props.onHandleSelectedProject(project.id)}>
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ProjectsSidebar;
