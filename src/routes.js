import { Callstack } from "./pages/Callstack";
import { TaskQueue } from "./pages/TaskQueue";
import { EventLoop } from "./pages/EventLoop";
import { AsyncWorld } from "./pages/AsyncWorld";
import { SetTimeoutFTW } from "./pages/SetTimeoutFtw";

export const routes = [
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
    name: "Event loop",
    to: "/event-loop",
    Component: EventLoop
  },
  {
    name: "Async world",
    to: "/async-world",
    Component: AsyncWorld
  },
  {
    name: "SetTimeout",
    to: "/set-timeout",
    Component: SetTimeoutFTW
  }
];
