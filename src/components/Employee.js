import styled from "styled-components"

const Employee = ({ employee }) => {
  return (
    <TableRow>
      <td>{employee.firstName}</td>
      <td>{employee.lastName}</td>
      <td>{employee.email}</td>
      <td>{employee.gender}</td>
    </TableRow>
  )
}
export default Employee

const TableRow = styled.tr`
  td {
    text-align: left;
  }
`
