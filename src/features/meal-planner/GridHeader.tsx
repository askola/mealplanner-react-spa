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
        <th scope="column">Ma {format(monday, dateFormat)}</th>
        <th scope="column">Ti {format(addDays(monday, 1), dateFormat)}</th>
        <th scope="column">Ke {format(addDays(monday, 2), dateFormat)}</th>
        <th scope="column">To {format(addDays(monday, 3), dateFormat)}</th>
        <th scope="column">Pe {format(addDays(monday, 4), dateFormat)}</th>
        <th scope="column">La {format(addDays(monday, 5), dateFormat)}</th>
        <th scope="column">Su {format(addDays(monday, 6), dateFormat)}</th>
      </tr>
    </thead>
  );
}
