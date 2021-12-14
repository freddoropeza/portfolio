import * as React from "react"
import { createTheme, ThemeProvider, responsiveFontSizes } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import HeroSection from "../components/HeroSection";
import Header from "../components/Header";
import Projects from "../components/Projects"; 
import About from "../components/About";
import Contact from "../components/Contact";
import Scroll from '../components/Scroll'

let darkTheme = createTheme ({
  palette: {
      type: "dark"
  }
})
darkTheme = responsiveFontSizes(darkTheme);

const IndexPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <HeroSection />
      <About />
      <Projects />
      <Contact />
      <Scroll showBelow={250} />
    </ThemeProvider>
  )
}

export default IndexPage
