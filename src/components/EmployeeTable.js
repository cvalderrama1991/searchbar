import styled from "styled-components"
import Employee from "./Employee"

const EmployeeTable = ({ employees }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <Employee key={employee.id} employee={employee} />
        ))}
      </tbody>
    </Table>
  )
}
export default EmployeeTable

const Table = styled.table`
  thead {
    tr {
      background-color: black;
      th {
        color: white;
        height: 2rem;
      }
    }
  }
  tbody {
    tr {
      td {
        text-align: left;
        border-bottom: 1px solid grey;
      }
    }
  }
`
