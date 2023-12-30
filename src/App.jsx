import { useState } from "react";

import NewProjects from "./components/NewProjects";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const handleAddTask = (text) => {
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        id: taskId,
        projectId: prevState.selectedProjectId,
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  };

  const handleDeleteTask = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        
        tasks: prevState.tasks.filter(
          (task) => task.id !== id
        ),
      };
      // this filter return false for which value we donot wand and returns true for condition that we want
    });
  };

  const handleSelectedProject = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  };

  const handleDeleteProject = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (projects) => projects.id !== prevState.selectedProjectId
        ),
      };
      // this filter return false for which value we donot wand and returns true for condition that we want
    });
  };

  const handleStartAddProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };
  const handleAddProject = (projectData) => {
    const projectId = Math.random();
    const newProject = {
      ...projectData,
      id: projectId,
    };

    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  const cancleHandler = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };

  let content;

  const Selected = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );
  const selectedTasks = projectsState.tasks.filter(
    (task) => task.projectId === projectsState.selectedProjectId
  );
  // for filtering tasks for respective project id.

  // this find returns the value of the project on which the condition holds

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProjects
        onHandleAddProject={handleAddProject}
        onCancle={cancleHandler}
      />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else {
    // console.log(SelectedTask)
    content = (
      <SelectedProject
        project={Selected}
        onDelete={handleDeleteProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        tasks={selectedTasks}
      />
    );
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectsSidebar
          onStartAddProject={handleStartAddProject}
          projects={projectsState.projects}
          onHandleSelectedProject={handleSelectedProject}
          selectedProjectId = {projectsState.selectedProjectId}
        />
        {content}
      </main>
    </>
  );
}

export default App;
