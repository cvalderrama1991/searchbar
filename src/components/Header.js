import styled from "styled-components"

const Header = ({ setInput }) => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Form>
          <input
            type="text"
            placeholder="Type to search..."
            onChange={(e) => setInput(e.target.value)}
          />
        </Form>
      </HeaderWrapper>
    </HeaderContainer>
  )
}
export default Header

const HeaderContainer = styled.header`
  width: 100%;
  height: 4rem;
  background-color: rgb(240, 240, 240);
`

const HeaderWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1300px;
  height: inherit;
  display: grid;
  place-content: center;
`

const Form = styled.form`
  height: 3rem;
  width: 350px;

  input {
    border-radius: 4px;
    height: inherit;
    border: 2px solid grey;
    width: 100%;

    &:focus {
      border-color: black;
    }
  }
`
