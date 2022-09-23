import styled from "@emotion/styled"

const buttonVariants = {
  primary: {
    background: "#3f51b5",
    color: "white",
  },
  secondary: {
    background: "#f1f2f7",
    color: "#434449",
  },
}
const Button = styled.button(
  {
    color: " white",
    background: " blue",
    padding: " 10px 25px",
    border: " none",
    cursor: " pointer",
    margin: " 5px",
  },
  (props) =>
    props.variant ? buttonVariants[props.variant] : buttonVariants["primary"]
)

const Conatiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: #f7f6dc;
  padding: 35px 55px;
  margin: 35vh auto;
  width: max-content;
`

const FlexedDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`
const CloseBtn = styled.button`
  all: unset;
  position: absolute;
  top: 3%;
  background: #f7f6dc;
  right: 3%;
  padding: 5px 8px;
  cursor: pointer;
`
export { Button, Conatiner, FlexedDiv, CloseBtn }
