import {Link, NavLink} from "react-router-dom";
import navlinks from "../data/navlinks.json";
import {BsCart4} from "react-icons/bs";
import {motion} from "framer-motion";
import {useCartContext} from "../store/CartContext.jsx";

export default function Navbar() {
   const {cartItems} = useCartContext();
   return (<>
      <motion.nav
         initial={{y: -90, opacity: 0}}
         animate={{y: 0, opacity: 1}}
         transition={{type: "tween", duration: 0.5, stiffness: 100}}
         className="h-16 bg-gray-300 w-full"
      >
         <div className="container h-full w-full flex items-center justify-between">
            <div className="logo">
               <Link to={"/"} className="text-cyan-600 font-bold uppercase text-2xl">
                  shop
               </Link>
            </div>
            <div className="flex items-center gap-6">
               <ul className="flex items-center gap-4">
                  {navlinks.map((link) => {
                     return (<li key={link.id}>
                        <NavLink
                           to={link.path}
                           className={"text-[17px] text-gray-600 font-medium py-1.5 capitalize"}
                        >
                           {link.title}
                        </NavLink>
                     </li>)
                  })}
               </ul>
               <NavLink
                   to={"/cart"}
                   className="text-gray-600 relative py-1.5"
               >
                  <BsCart4 size={22}/>
                  <span
                     className="absolute -top-1.5 -right-3.5 w-[22px] h-[22px] flex items-center justify-center rounded-full bg-cyan-600 text-gray-300 text-[15px]">
                     {cartItems.length}
                  </span>
               </NavLink>
            </div>
         </div>
      </motion.nav>
   </>);
}