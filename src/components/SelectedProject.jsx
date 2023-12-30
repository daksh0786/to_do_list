import Tasks from "./Tasks";

export default function SelectedProject({ project, onDelete }) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  // making the date such that it can be easily read

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex item-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button className="text-stone-600 hover:text-stone-950" onClick = {onDelete}>
            Delete
          </button>
        </div>
        <div>
          <p className="mb-4 text-stone-400">{formattedDate}</p>
          <p className="text-stone-600 whitespace-pre-wrap">
            {project.description}
          </p>
        </div>
      </header>
      <Tasks />
    </div> 
  );
}
