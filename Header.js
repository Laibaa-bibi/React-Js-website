import { Link,NavLink } from "react-router-dom";

const MyHeader = () => {

    const navLinkStyles = ({ isActive }) => {
        return {
          fontWeight: isActive ? "bold" : "normal",
          color:isActive ? "white" : "white",
          fontSize:isActive ?"25px": "22px",
          textDecoration: isActive ? "none" : "none",
        };
      };

return(
    <div class="head">

   <NavLink to={'/'} style={navLinkStyles}>Home</NavLink>
         
   <NavLink to={'/Goals'} style={navLinkStyles}>Set Goals</NavLink> 

   <NavLink to={'/Contact'} style={navLinkStyles}>Contact Us</NavLink>
  
  </div>
)
}


export default MyHeader;                   
