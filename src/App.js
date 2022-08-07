import EmployeeTable from "./components/EmployeeTable"
import Header from "./components/Header"
import { Container, GlobalStyle, Main } from "./Global/Global.style"
import data from "./data.json"
import { useEffect, useState } from "react"

function App() {
  const [employees, setEmployees] = useState([])
  const [input, setInput] = useState("")

  useEffect(() => {
    setEmployees(data)
  }, [])

  const searchTable = (value) => {
    return value.filter(
      (item) =>
        item.firstName.toLowerCase().includes(input.toLowerCase()) ||
        item.lastName.toLowerCase().includes(input.toLowerCase()) ||
        item.email.toLowerCase().includes(input.toLowerCase()) ||
        item.gender.toLowerCase().includes(input.toLowerCase())
    )
  }
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header setInput={setInput} />
        <Main>
          <EmployeeTable employees={searchTable(employees)} />
        </Main>
      </Container>
    </>
  )
}

export default App
