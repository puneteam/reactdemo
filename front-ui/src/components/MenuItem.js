import Dropdown from "./Dropdown";

const MenuItem = ({ items }) => {
 return (
  <li className="menu-items">
   {items.submenu ? (
    <>
     <button type="button" aria-haspopup="menu">
      {items.title}{" "}
      
     </button>
     <Dropdown submenus={items.submenu} />
    </>
   ) : (
    
    <a href={items.ll}>{items.title}</a>
    
  )}
  </li>
 );
};

export default MenuItem;