import styled from "styled-components"

export const CardContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 162px;
  width: 255px;
  border: 1px solid black;
`

export const CardNumber = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 80%;
`

export const Expiry = styled.div`
  display:flex;
  justify-content: flex-end;
  width: 80%;
`

export const DeleteButton = styled.button`
  position: absolute;
  width: 20px;
  height: 20px;
  right: 0;
  top: 0;
`