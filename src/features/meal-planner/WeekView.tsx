import { addDays, format, startOfISOWeek } from "date-fns";
import { root } from "./WeekView.css";

interface WeekViewProps {
  day: Date;
}

export function WeekView({ day }: WeekViewProps) {
  const monday = startOfISOWeek(day);
  const dateFormat = "d.M.";
  return (
    <ol className={root}>
      <li>
        <ol>
          <h2>Ma {format(monday, dateFormat)}</h2>
          <li>Lounas - Makkaraa</li>
          <li>Illallinen - Tacoja</li>
        </ol>
      </li>
      <li>
        <ol>
          <h2>Ti {format(addDays(monday, 1), dateFormat)}</h2>
          <li>Lounas - Makkaraa</li>
          <li>Illallinen - Tacoja</li>
        </ol>
      </li>
      <li>
        <ol>
          <h2>Ke {format(addDays(monday, 2), dateFormat)}</h2>
          <li>Lounas - Makkaraa</li>
          <li>Illallinen - Tacoja</li>
        </ol>
      </li>
      <li>
        <ol>
          <h2>To {format(addDays(monday, 3), dateFormat)}</h2>
          <li>Lounas - Makkaraa</li>
          <li>Illallinen - Tacoja</li>
        </ol>
      </li>
      <li>
        <ol>
          <h2>Pe {format(addDays(monday, 4), dateFormat)}</h2>
          <li>Lounas - Makkaraa</li>
          <li>Illallinen - Tacoja</li>
        </ol>
      </li>
      <li>
        <ol>
          <h2>La {format(addDays(monday, 5), dateFormat)}</h2>
          <li>Lounas - Makkaraa</li>
          <li>Illallinen - Tacoja</li>
        </ol>
      </li>
      <li>
        <ol>
          <h2>Su {format(addDays(monday, 6), dateFormat)}</h2>
          <li>Lounas - Makkaraa</li>
          <li>Illallinen - Tacoja</li>
        </ol>
      </li>
    </ol>
  );
}
