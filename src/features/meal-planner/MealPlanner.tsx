import { useState } from "react";
import {
  addWeeks,
  format,
  isBefore,
  lastDayOfISOWeek,
  startOfISOWeek,
} from "date-fns";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import * as styles from "./Mealplanner.css";
import { WeekView } from "./WeekView";

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
    <div className={styles.root}>
      <h1 className={styles.h1}>Viikon ruokasuunnitelma</h1>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button onClick={prevWeek}>
          <SlArrowLeft />
        </button>
        <h2 className={styles.h2}>
          Viikko {weekNumber} ({mondayOfTheWeek} - {sundayOfTheWeek})
        </h2>
        <button onClick={nextWeek}>
          <SlArrowRight />
        </button>
      </div>
      <WeekView day={day} />
    </div>
  );
}
