import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@popperjs/core/dist/umd/popper.min.js";
// import Header from "../Header";
import Footer from "../Footer";
import Header from "../Header";
import { GlobalStyles } from "./style";


const Layout= ({children}:any) => {
  return (
<>
<GlobalStyles/>
<Header/>
{children}
<Footer/>
</>
  )
}

export default Layout