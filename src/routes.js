import { SimpleCallstack } from "./pages/SimpleCallstack";
import { AsyncStack } from "./pages/AsyncStack";
import { SetTimeoutFTW } from "./pages/SetTimeoutFtw";

export const routes = [
  {
    name: "Simple callstack",
    to: "/simple-stack",
    Component: SimpleCallstack
  },
  {
    name: "Async stack",
    to: "/async-stack",
    Component: AsyncStack
  },
  {
    name: "SetTimeout",
    to: "/set-timeout",
    Component: SetTimeoutFTW
  }
];
