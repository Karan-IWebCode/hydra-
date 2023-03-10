import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

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