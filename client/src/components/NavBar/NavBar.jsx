import react from "@/assets/react.svg";
import { NavLink } from "react-router-dom";
import SearchForm from "./components/SearchForm";
import DropdownHelp from "./components/DropdownHelp";
import DropdownAccount from "./components/dropdownAccount";
import DropdownShop from "./components/DropdownShop";
function NavBar() {
  return (
    <nav className="flex h-16 items-center justify-center gap-44 bg-cyan-600">
      <div>
        <img src={react} alt="" />
      </div>

      <div>
        <NavLink to="/services">Ir a servicios</NavLink>
      </div>

      <div>
        <SearchForm />
      </div>

      <div>
        <ul className="flex gap-28 ">
          <DropdownHelp />
          <DropdownAccount />
        </ul>
      </div>

      <div>
        <DropdownShop />
      </div>
    </nav>
  );
}

export default NavBar;
