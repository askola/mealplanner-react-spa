import { createFileRoute } from "@tanstack/react-router";
import { MealPlanner } from "../features/meal-planner/MealPlanner";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <MealPlanner></MealPlanner>
    </>
  );
}
