import Dialog from "@reach/dialog"
import React from "react"
import "@reach/dialog/styles.css"
import { useState } from "react"
import {
  BtnSecondary,
  Button,
  CloseBtn,
  Conatiner,
  FlexedDiv,
  ButtonX,
} from "../styles/styles"
import { Logo } from "./logo"
export default function AuthenticatedApp() {
  const [isOpen, setIsOpen] = useState("none")
  // login component
  function LogIn({ onSubmit, submitText }) {
    // form submit handler
    function handleSubmit(e) {
      e.preventDefault()
      const username = e.target.elements.username.value
      const password = e.target.elements.password.value
      //this returns data so we can have it per form
      onSubmit({ username, password })
    }

    return (
      <form onSubmit={handleSubmit}>
        <FlexedDiv>
          <label htmlFor="username">Username</label>
          <input name="username" id="username" type="text" />
        </FlexedDiv>
        <FlexedDiv>
          <label htmlFor="password">password</label>
          <input type="password" name="password" id="password" />
        </FlexedDiv>
        <Button style={{ marginTop: "20px", marginLeft: "0px" }} type="submit">
          {submitText}
        </Button>
      </form>
    )
  }

  function login(formdata) {
    console.log("sign in data: ", formdata)
  }

  function register(formdata) {
    console.log("register data: ", formdata)
  }

  return (
    <Conatiner className="login-container">
      <Logo />
      <h1 style={{ marginTop: -10 }}>Bookshelf</h1>
      <div>
        <Button onClick={() => setIsOpen("login")}>Login</Button>
        <Button variant="secondary" onClick={() => setIsOpen("register")}>
          Register
        </Button>
      </div>

      <Dialog
        className="form-popup"
        isOpen={isOpen === "login" ? true : false}
        aria-label="sign in form"
      >
        <LogIn submitText="Log In" onSubmit={login} />
        <CloseBtn onClick={() => setIsOpen("none")}>Close</CloseBtn>
      </Dialog>
      <Dialog
        className="form-popup"
        isOpen={isOpen === "register" ? true : false}
        aria-label="register form"
      >
        <LogIn submitText="Register" onSubmit={register} />
        <CloseBtn onClick={() => setIsOpen("none")}>Close</CloseBtn>
      </Dialog>
    </Conatiner>
  )
}
