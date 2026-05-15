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
            <th scope="row">Aamupala</th>
            <td>Puuro</td>
            <td></td>
            <td>Puuro</td>
            <td>Leipää ja päällisiä</td>
            <td>Puuro</td>
            <td>Leipää ja päällisiä</td>
            <td>Leipää ja päällisiä</td>
          </tr>
          <tr>
            <th scope="row">Lounas</th>
            <td>Puuro</td>
            <td>Leipää ja päällisiä</td>
            <td>Puuro</td>
            <td>Leipää ja päällisiä</td>
            <td>Puuro</td>
            <td></td>
            <td>Leipää ja päällisiä</td>
          </tr>
          <tr>
            <th scope="row">Illallinen</th>
            <td>Puuro</td>
            <td></td>
            <td></td>
            <td>Leipää ja päällisiä</td>
            <td>Puuro</td>
            <td>Leipää ja päällisiä</td>
            <td>Leipää ja päällisiä</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
