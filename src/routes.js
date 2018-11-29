import { Callstack } from "./pages/Callstack";
import { TaskQueue } from "./pages/TaskQueue";
import { MicroTasks } from "./pages/MicroTasks";
import { Raf } from "./pages/Raf";
import { AsyncWorld } from "./pages/AsyncWorld";
import { Home } from "./pages/Home";

export const routes = [
  {
    name: "Home",
    to: "/",
    Component: Home
  },
  {
    name: "Callstack",
    to: "/callstack",
    Component: Callstack
  },
  {
    name: "Task queue",
    to: "/task-queue",
    Component: TaskQueue
  },
  {
    name: "Micro tasks",
    to: "/micro-tasks",
    Component: MicroTasks
  },
  // {
  //   name: "requestAnimationFrame",
  //   to: "/ref",
  //   Component: Raf
  // },
  {
    name: "Async world",
    to: "/async-world",
    Component: AsyncWorld
  }
];
