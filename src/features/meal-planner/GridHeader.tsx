import { addDays, format, startOfISOWeek } from "date-fns";

interface GridHeaderProps {
  day: Date;
}

export function GridHeader({ day }: GridHeaderProps) {
  const monday = startOfISOWeek(day);
  const dateFormat = "d.M.";
  return (
    <thead>
      <tr>
        <th></th>
        <th>Ma {format(monday, dateFormat)}</th>
        <th>Ti {format(addDays(monday, 1), dateFormat)}</th>
        <th>Ke {format(addDays(monday, 2), dateFormat)}</th>
        <th>To {format(addDays(monday, 3), dateFormat)}</th>
        <th>Pe {format(addDays(monday, 4), dateFormat)}</th>
        <th>La {format(addDays(monday, 5), dateFormat)}</th>
        <th>Su {format(addDays(monday, 6), dateFormat)}</th>
      </tr>
    </thead>
  );
}
