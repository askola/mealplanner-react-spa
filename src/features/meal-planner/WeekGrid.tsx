import { GridHeader } from "./GridHeader";

interface WeekGridProps {
  day: Date;
}

export function WeekGrid({ day }: WeekGridProps) {
  return (
    <>
      <table>
        <GridHeader day={day} />
        <tbody>
          <tr>
            <th>Aamupala</th>
            <th>Puuro</th>
            <th></th>
            <th>Puuro</th>
            <th>Leipää ja päällisiä</th>
            <th>Puuro</th>
            <th>Leipää ja päällisiä</th>
            <th>Leipää ja päällisiä</th>
          </tr>
          <tr>
            <th>Lounas</th>
            <th>Puuro</th>
            <th>Leipää ja päällisiä</th>
            <th>Puuro</th>
            <th>Leipää ja päällisiä</th>
            <th>Puuro</th>
            <th></th>
            <th>Leipää ja päällisiä</th>
          </tr>
          <tr>
            <th>Illallinen</th>
            <th>Puuro</th>
            <th></th>
            <th></th>
            <th>Leipää ja päällisiä</th>
            <th>Puuro</th>
            <th>Leipää ja päällisiä</th>
            <th>Leipää ja päällisiä</th>
          </tr>
        </tbody>
      </table>
    </>
  );
}
