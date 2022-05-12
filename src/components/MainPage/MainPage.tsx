import { useState } from "react";
import { IdType, ProjectType } from "../../projectsData";

type MainPageProps = {
  projects: ProjectType[];
  defaultProjectId: IdType;
};

function MainPage({ projects, defaultProjectId }: MainPageProps) {
  const [currentProject, setCurrentProject] = useState(
    projects.find((project) => project.id === defaultProjectId) || projects[0]
  );

  const handleTodoStatusChange = (todoId: IdType, isCompleted?: boolean) => {
    setCurrentProject((x) => {
      return {
        ...x,
        todos: x.todos.map((todo) => {
          if (todo.id === todoId) {
            return { ...todo, isCompleted };
          }
          return todo;
        }),
      };
    });
  };

  return (
    <div>
      <button>Inbox</button>
      <button>Today</button>
      <button>Next 7 days</button>
      <ul>
        {projects
          ?.filter((project) => project.id !== defaultProjectId)
          .map((project) => (
            <li key={project.id}>{project.name}</li>
          ))}
      </ul>
      <br />
      <br />
      <ul>
        {currentProject?.todos.map((todo) => (
          <li
            data-testid={todo.id}
            key={todo.id}
            data-is-completed={todo.isCompleted || false}
          >
            <div>{todo.title}</div>
            <div>{todo.description || "No description"}</div>
            <button
              aria-label={todo.title + " toggle button"}
              aria-checked="false"
              role={"switch"}
              onClick={() => handleTodoStatusChange(todo.id, !todo.isCompleted)}
            ></button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MainPage;
