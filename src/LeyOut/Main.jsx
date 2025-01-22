import { Outlet } from "react-router-dom"
import Navber from "../Shared/Navber/Navber"
import Footer from "../Shared/Footer"

const Main = () => {
  return (
    <div>
        <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Main
