import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { addDays, addHours } from "date-fns";
import { ProjectType } from "../../projectsData";
import MainPage from "./MainPage";

const fakeProjects: ProjectType[] = [
  {
    id: 1,
    name: "defaultProject",
    todos: [
      {
        id: 2,
        title: "Clean living room",
        description: "Clean the living room to invite guests",
        isCompleted: true,
        subTodos: [
          {
            id: 3,
            title: "Clean the couch",
            isCompleted: true,
          },
          {
            id: 4,
            title: "Clean the carpet",
            isCompleted: true,
          },
        ],
      },
      {
        id: 5,
        title: "Clearn kitchen",
        isCompleted: false,
        dueDate: addHours(new Date(), 5),
        subTodos: [
          {
            id: 6,
            title: "Clean the oven",
            isCompleted: true,
          },
          {
            id: 7,
            title: "Clean the stove",
          },
          {
            id: 8,
            title: "Clean the sink",
          },
        ],
      },
    ],
  },
  {
    id: 9,
    name: "Fix House Lights",
    todos: [
      {
        id: 10,
        title: "Get lights from store",
        description:
          "Go to nearest store and buy good quailty lights for less than 30$",
        isCompleted: false,
        dueDate: addDays(new Date(), 6),
        priority: 1,
        subTodos: [
          {
            id: 11,
            title: "Find a store in Google Maps",
            isCompleted: false,
            priority: 1,
          },
          {
            id: 12,
            title: "Drive to the store",
            isCompleted: false,
            priority: 2,
          },
          {
            id: 13,
            title: "Buy lights",
            isCompleted: false,
            priority: 3,
          },
        ],
      },
      {
        id: 14,
        title: "Find an electrician",
        description: "Find and call an electrician to fix the lights",
        isCompleted: false,
        dueDate: addDays(new Date(), 7),
        priority: 2,
        subTodos: [
          {
            id: 15,
            title: "Search the Internet for a good electrician",
            isCompleted: false,
            priority: 1,
          },
          {
            id: 16,
            title: "Call the electrician",
            isCompleted: true,
            priority: 2,
          },
          {
            id: 17,
            title: "Bring electrician to the house",
            isCompleted: false,
            priority: 3,
          },
        ],
      },
    ],
  },
  {
    id: 18,
    name: "Clean the house",
    todos: [],
  },
];

describe("MainPage", () => {
  it("renders [Inbox, Today, Next 7 days] buttons", () => {
    render(<MainPage defaultProjectId={""} projects={[]} />);
    expect(screen.getByText(/inbox/i)).toBeInTheDocument();
    expect(screen.getByText(/today/i)).toBeInTheDocument();
    expect(screen.getByText(/next 7 days/i)).toBeInTheDocument();
  });

  describe("Given list of projects", () => {
    it("should render projects names except for default project", () => {
      render(
        <MainPage
          projects={fakeProjects}
          defaultProjectId={fakeProjects[0].id}
        />
      );
      expect(screen.queryByText(fakeProjects[0].name)).not.toBeInTheDocument();
      expect(screen.getByText(fakeProjects[1].name)).toBeInTheDocument();
      expect(screen.getByText(fakeProjects[2].name)).toBeInTheDocument();
    });

    it("should render default projects todos on first render", () => {
      render(
        <MainPage
          projects={fakeProjects}
          defaultProjectId={fakeProjects[0].id}
        />
      );
      expect(
        screen.getByText(fakeProjects[0].todos[0].title)
      ).toBeInTheDocument();
      expect(
        screen.getByText(fakeProjects[0].todos[1].title)
      ).toBeInTheDocument();
    });

    it("should render correct todos status", () => {
      render(
        <MainPage
          projects={fakeProjects}
          defaultProjectId={fakeProjects[0].id}
        />
      );

      expect(screen.getByTestId(fakeProjects[0].todos[0].id)).toHaveAttribute(
        "data-is-completed",
        fakeProjects[0].todos[0].isCompleted + ""
      );
      expect(screen.getByTestId(fakeProjects[0].todos[0].id)).toHaveAttribute(
        "data-is-completed",
        fakeProjects[0].todos[0].isCompleted + ""
      );
    });
  });

  it("should be able to change todo status on click", () => {
    render(
      <MainPage projects={fakeProjects} defaultProjectId={fakeProjects[0].id} />
    );

    const firstTodo = fakeProjects[0].todos[0];
    const secondTodo = fakeProjects[0].todos[1];

    expect(screen.getByTestId(firstTodo.id)).toHaveAttribute(
      "data-is-completed",
      firstTodo.isCompleted + ""
    );
    userEvent.click(
      screen.getByRole("switch", { name: RegExp(firstTodo.title, "i") })
    );
    expect(screen.getByTestId(firstTodo.id)).toHaveAttribute(
      "data-is-completed",
      !firstTodo.isCompleted + ""
    );

    expect(screen.getByTestId(secondTodo.id)).toHaveAttribute(
      "data-is-completed",
      secondTodo.isCompleted + ""
    );
    userEvent.click(
      screen.getByRole("switch", { name: RegExp(secondTodo.title, "i") })
    );
    expect(screen.getByTestId(secondTodo.id)).toHaveAttribute(
      "data-is-completed",
      !secondTodo.isCompleted + ""
    );
  });
});
