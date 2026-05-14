import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import "../styles/global.css";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <div className="p-2 flex gap-2 text-lg">
        <Link
          to="/"
          activeProps={{
            className: "font-bold",
          }}
          activeOptions={{ exact: true }}
        >
          Meal Planner
        </Link>{" "}
        <Link
          to="/recipes"
          activeProps={{
            className: "font-bold",
          }}
        >
          Recipes
        </Link>
        <Link
          to="/shopping"
          activeProps={{
            className: "font-bold",
          }}
        >
          Shopping
        </Link>
      </div>
      <hr />
      <Outlet />
    </React.Fragment>
  );
}
