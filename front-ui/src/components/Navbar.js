import { menuItems } from "./menuItems";
import MenuItem from "./MenuItem";
const Navbar = () => {
 return (
  <nav>
   <ul className="menus">
    {menuItems.map((menu, index) => {
     return <MenuItem items={menu} key={index} />;
    })}
   </ul>
  </nav>
 );
};

export default Navbar;