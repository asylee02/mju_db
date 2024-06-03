import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Main from "./pages/Main";
import Question1_A from "./pages/1-A";
import Question1_B from "./pages/1-B";
import Question1_C from "./pages/1-C";
import Question1 from "./pages/Question1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "", // "/"로 시작하지 않도록 빈 문자열로 수정
        element: <Main />,
      },
    ],
  },
  {
    path: "/question1",
    element: <App />,
    children: [
      {
        path: "", // "/"로 시작하지 않도록 빈 문자열로 수정
        element: <Question1 />,
      },
      {
        path: "a", // "/"로 시작하지 않도록 빈 문자열로 수정
        element: <Question1_A />,
      },
      {
        path: "b", // "/"로 시작하지 않도록 빈 문자열로 수정
        element: <Question1_B />,
      },
      {
        path: "c", // "/"로 시작하지 않도록 빈 문자열로 수정
        element: <Question1_C />,
      },
    ],
  },
]);

export default router;
