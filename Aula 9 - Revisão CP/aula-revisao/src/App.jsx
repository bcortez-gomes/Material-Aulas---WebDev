import Navbar from "./components/NavBar";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Outlet/>
    </div>

  );
}
