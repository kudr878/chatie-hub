import { Outlet } from "react-router";
import Nav from "../comps/Nav";
import Footer from "../comps/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col ">
      <Nav />
      <div className="mt-5 px-5 lg:px-20 flex-1">
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}
