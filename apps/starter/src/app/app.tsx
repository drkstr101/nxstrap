import React from "react"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import AboutUs from "@watheia/now.pages.about-us"
import BlogPosts from "@watheia/now.pages.blog-posts"
import ContactUs from "@watheia/now.pages.contact-us"
import HomePage from "@watheia/now.pages.home-page"
import LoginPage from "@watheia/now.pages.login-page"
import SignupPage from "@watheia/now.pages.signup-page"
import Presentation from "@watheia/now.pages.presentation"

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/presentation" component={Presentation} />
        <Route path="/about" component={AboutUs} />
        <Route path="/blog" component={BlogPosts} />
        <Route path="/support" component={ContactUs} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={SignupPage} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}

export default App
