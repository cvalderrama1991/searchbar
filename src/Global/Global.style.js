import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`

export const Container = styled.div`
  width: 100%;
`
export const Main = styled.div`
  margin: 0 auto;
  width: 100%;
  display: grid;
  align-content: start;
`
