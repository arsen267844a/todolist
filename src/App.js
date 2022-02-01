import { HomePage } from "./pages/HomePage";
import { ToDoListPage } from "./pages/ToDoListPage";
import { Route } from "react-router-dom";
import { routes } from "./routes";

export const App = () => {
  return (
    <div>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          children={<route.page />}
        />
      ))}

      {/*<HomePage/>*/}
      <ToDoListPage />
    </div>
  );
};
