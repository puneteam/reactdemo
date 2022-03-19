const Dropdown = ({ submenus }) => {
    return (
     <ul className="dropdown">

      {submenus.map((submenu, index) => (
          console.log("submenu"+{submenu}),
       <li key={index} className="menu-items">
           
        <a href={submenu.ll}>{submenu.title}</a>
       </li>
      ))}
     </ul>
    );
   };
   
   export default Dropdown;