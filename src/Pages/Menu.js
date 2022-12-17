// import React from 'react';

// const Menu = ({header, items}) => {
    
//     const [menuActive, setMenuActive] = React.useState(false);
//     // onClick={e => e.stopPropagation()}
//     const items = [
//         {value: "About", href: "/about"},
//         {value: "Service", href: "/services"},
//         {value: "Blog", href: "/blog"},
//         {value: "Work", href: "/work"},
//         {value: "Contact", href: "/contact"},
//         {value: <i className="fa-solid fa-cart-shopping"></i>, href: "/"},
//         {value: <i className="fa-solid fa-magnifying-glass"></i>, href: "/"},
//     ]

//     return(
//         <header className={`header ${menuActive ? 'nav active' : ''}`} onClick={() => setMenuActive(!menuActive)}>
//             <div className="container">
//                 <div className="header_inner">
//                     <a className="logo" href="/">MoGo</a>
                    
//                     <nav className="nav">
//                             <ul>
//                                 {items.map(item =>
//                                     <li>
//                                         <a href={item.href}>{item.value}</a>
//                                     </li>
//                                 )}
//                             </ul>
//                     </nav>
                    
//                     <button className="nav_toggle" type="menu">
//                         <i className="fa-solid fa-bars"></i>
//                     </button>
//                 </div>
//             </div>
//         </header>

// <Menu active={menuActive} setActive={setMenuActive} header={<i className="fa-solid fa-bars"></i>} items = {items}/>
//     );
// }

// export default Menu;