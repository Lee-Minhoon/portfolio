import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ChakraProvider, Layout } from "./components";
import { PageRoutes } from "./constants";
import { HomePage } from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={""} element={<Layout />}>
      <Route path={PageRoutes.Home} element={<HomePage />} />
    </Route>
  )
);

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
