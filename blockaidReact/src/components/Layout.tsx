import React from "react"
import { Footer } from "./organisms/layout/Footer"
import { Header} from "./organisms/layout/Header"

const Layout = ({ children }) => {
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
    return (
        <>
            <Header></Header>
                <main>{children}</main>
            <Footer></Footer>
        </>
    )
}

export default Layout