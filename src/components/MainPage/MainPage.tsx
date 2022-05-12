import { useState } from "react";
import { IdType, ProjectType } from "../../projectsData";
import Button from "../Button/Button";

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
    <div className="grid grow grid-cols-6">
      <aside className="flex flex-col gap-4 border p-4">
        <Button className="py-2 shadow-sm px-4 border rounded-md border-blue-300">
          Inbox
        </Button>
        <Button className="py-2 shadow-sm px-4 border rounded-md border-blue-300">
          Today
        </Button>
        <Button className="py-2 shadow-sm px-4 border rounded-md border-blue-300">
          Next 7 days
        </Button>
        <div className="border my-4"></div>
        <ul className="flex flex-col gap-3">
          {projects
            ?.filter((project) => project.id !== defaultProjectId)
            .map((project) => (
              <li key={project.id}>
                <Button className="py-2 shadow-sm px-4 border rounded-md border-red-300">
                  {project.name}
                </Button>
              </li>
            ))}
        </ul>
      </aside>
      <section className="col-span-5 overflow-y-auto">
        <ul className="flex flex-col p-4 gap-4">
          {currentProject?.todos.map((todo) => (
            <li
              data-testid={todo.id}
              key={todo.id}
              data-is-completed={todo.isCompleted || false}
              className={
                "flex grow justify-between border rounded-lg shadow-md p-3 items-center hover:cursor-pointer clickable" +
                (todo.isCompleted ? " border-blue-600" : "")
              }
            >
              <div>{todo.title}</div>
              <div>{todo.description || "No description"}</div>
              <Button
                children=""
                className={
                  "appearance-none h-5 w-5 border border-gray-300 rounded-md  focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" +
                  (todo.isCompleted && " bg-blue-600 border-blue-600")
                }
                onClickHandler={() =>
                  handleTodoStatusChange(todo.id, !todo.isCompleted)
                }
                otherProps={{
                  role: "switch",
                  "aria-checked": todo.isCompleted ? "true" : "false",
                  "aria-label": todo.title + " toggle button",
                  "data-mdb-ripple": "true",
                  "data-mdb-ripple-color": "light",
                }}
              ></Button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default MainPage;
