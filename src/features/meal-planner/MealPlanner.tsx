import { useState } from "react";
import { WeekGrid } from "./WeekGrid";
import {
  addWeeks,
  format,
  isBefore,
  lastDayOfISOWeek,
  startOfISOWeek,
} from "date-fns";

export function MealPlanner() {
  const [day, setDay] = useState(new Date());
  const weekNumber = format(day, "I");
  const mondayOfTheWeek = format(startOfISOWeek(day), "d.M.yyyy");
  const sundayOfTheWeek = format(lastDayOfISOWeek(day), "d.M.yyyy");

  const firstPossibleDay = new Date("2025-12-29");

  const prevWeek = () => {
    setDay((d) => {
      const newDay = addWeeks(d, -1);
      if (isBefore(newDay, firstPossibleDay)) return firstPossibleDay;
      return newDay;
    });
  };

  const nextWeek = () => {
    setDay((d) => addWeeks(d, 1));
  };
  return (
    <>
      <h1>Viikon ruokasuunnitelma</h1>
      <button onClick={prevWeek}>-</button>
      <h2>
        Viikko {weekNumber} ({mondayOfTheWeek} - {sundayOfTheWeek})
      </h2>
      <button onClick={nextWeek}>+</button>
      <WeekGrid day={day}></WeekGrid>
    </>
  );
}
