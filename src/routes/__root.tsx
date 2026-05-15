import { Outlet, createRootRoute } from "@tanstack/react-router";
import "../styles/global.css";
import { MainMenu } from "../components/MainMenu";
import { Link } from "../components/Link";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <MainMenu>
        <Link to="/">Meal Planner</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/shopping">Shopping</Link>
      </MainMenu>
      <Outlet />
    </>
  );
}
