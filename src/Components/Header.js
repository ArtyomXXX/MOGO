import React from 'react';

function Header() {

    const [menuActive, setMenuActive] = React.useState(false);
    // onClick={e => e.stopPropagation()}
    const items = [
        {value: "About", href: "/about"},
        {value: "Service", href: "/services"},
        {value: "Blog", href: "/blog"},
        {value: "Work", href: "/work"},
        {value: "Contact", href: "/contact"},
        {value: <i className="fa-solid fa-cart-shopping"></i>, href: "/"},
        {value: <i className="fa-solid fa-magnifying-glass"></i>, href: "/"},
    ]

    return(
        <header className='header'>
            <div className="container">
                <div className="header_inner">
                    <a className="logo" href="/">MoGo</a>
                    <nav className="nav">
                            <ul className={menuActive ? ['nav ul', 'active'].join(' ') : ['nav ul']}>
                                {items.map(item =>
                                    <li>
                                        <a href={item.href}>{item.value}</a>
                                    </li>
                                )}
                            </ul>
                    </nav>

                    <button className={`nav_toggle ${menuActive ? 'active' : ''}`} onClick={() => setMenuActive(!menuActive)} type="menu">
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;