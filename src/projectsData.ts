import { nanoid } from "nanoid";
import { addDays } from "date-fns";

export type IdType = string | number;

export type subTodo = {
  id: IdType;
  title: string;
  isCompleted?: boolean;
  priority?: number;
};

export type TodoType = {
  id: IdType;
  title: string;
  description?: string;
  isCompleted?: boolean;
  dueDate?: Date;
  priority?: number;
  subTodos?: subTodo[];
};

export type ProjectType = {
  id: IdType;
  name: string;
  todos: TodoType[];
};

export const projects: ProjectType[] = [
  {
    id: nanoid(),
    name: "defaultProject",
    todos: [
      {
        id: nanoid(),
        title: "Clean living room",
        description: "Clean the living room to invite guests",
        isCompleted: true,
        subTodos: [
          {
            id: nanoid(),
            title: "Clean the couch",
            isCompleted: true,
          },
          {
            id: nanoid(),
            title: "Clean the carpet",
            isCompleted: true,
          },
        ],
      },
      {
        id: nanoid(),
        title: "Clearn kitchen",
        isCompleted: false,
        subTodos: [
          {
            id: nanoid(),
            title: "Clean the oven",
            isCompleted: true,
          },
          {
            id: nanoid(),
            title: "Clean the stove",
          },
          {
            id: nanoid(),
            title: "Clean the sink",
          },
        ],
      },
    ],
  },
  {
    id: nanoid(),
    name: "Fix House Lights",
    todos: [
      {
        id: nanoid(),
        title: "Get lights from store",
        description:
          "Go to nearest store and buy good quailty lights for less than 30$",
        isCompleted: false,
        dueDate: addDays(new Date(), 6),
        priority: 1,
        subTodos: [
          {
            id: nanoid(),
            title: "Find a store in Google Maps",
            isCompleted: false,
            priority: 1,
          },
          {
            id: nanoid(),
            title: "Drive to the store",
            isCompleted: false,
            priority: 2,
          },
          {
            id: nanoid(),
            title: "Buy lights",
            isCompleted: false,
            priority: 3,
          },
        ],
      },
      {
        id: nanoid(),
        title: "Find an electrician",
        description: "Find and call an electrician to fix the lights",
        isCompleted: false,
        dueDate: addDays(new Date(), 7),
        priority: 2,
        subTodos: [
          {
            id: nanoid(),
            title: "Search the Internet for a good electrician",
            isCompleted: false,
            priority: 1,
          },
          {
            id: nanoid(),
            title: "Call the electrician",
            isCompleted: true,
            priority: 2,
          },
          {
            id: nanoid(),
            title: "Bring electrician to the house",
            isCompleted: false,
            priority: 3,
          },
        ],
      },
    ],
  },
  {
    id: nanoid(),
    name: "Clean the house",
    todos: [],
  },
];

export const defaultProjectId = projects[0].id;
