import { useState } from "react";
import { useSortData } from "../../utils/hooks/useSortableData";
import "./main-table.scss";
import { DetailRowView } from "../detail-row-view/detail-row-view";

const MainTable = ({ data }) => {
  const { getClassNamesFor, requestSort } = useSortData(data);

  const [detailRowData, setDetailRowData] = useState();

  const ar = Object.entries(data[0]);

  console.log(ar);

  return (
    <div className="main-table-container">
      <table>
        <thead>
          <tr>
            <th
              onClick={() => requestSort("id")}
              className={getClassNamesFor("id")}
            >
              ID
            </th>
            <th
              onClick={() => requestSort("firstName")}
              className={getClassNamesFor("firstName")}
            >
              First Name
            </th>
            <th
              onClick={() => requestSort("lastName")}
              className={getClassNamesFor("lastName")}
            >
              Last Name
            </th>
            <th
              onClick={() => requestSort("email")}
              className={getClassNamesFor("email")}
            >
              Email
            </th>
            <th
              onClick={() => requestSort("phone")}
              className={getClassNamesFor("phone")}
            >
              Phone
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((person) => (
            <tr
              key={person.id + person.phone}
              onClick={() => setDetailRowData(person)}
            >
              <td>{person.id}</td>
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
              <td>{person.email}</td>
              <td>{person.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <>
        <DetailRowView person={detailRowData} />
      </>
    </div>
  );
};

export default MainTable;
