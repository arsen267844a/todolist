import { routes } from "./routes";
import { Route } from "react-router";
import { HomePage } from "./pages/HomePage";
import { ToDoListPage } from "./pages/ToDoListPage";

export const App = () => {
  return (
    <div>
      {/*<HomePage/>*/}
      <ToDoListPage />
    </div>
  );
};
