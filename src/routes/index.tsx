import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Root from "./root";
import Main from "../components/Main";
import EnterForm from "../components/EnterForm";
import ErrorBoundary from "./ErrorBoundary";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<Root />}
      errorElement={<ErrorBoundary />}
    >
      <Route index element={<Main />} />
      <Route
        path='signin'
        element={<EnterForm
          formTitle='войдите в аккаунт'
          buttonText='Войти'
        />}
      />
      <Route
        path='signup'
        element={<EnterForm
          formTitle='зарегистрируйтесь'
          buttonText='Зарегистрироваться'
        />}
      />
    </Route>
  )
);

export default router;