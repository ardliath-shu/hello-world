const Navbar = () => {

    const handleNav = (ev, page) => {
        ev.preventDefault();
        console.log(`The ${page} link was clicked.`);
        // Additional logic here if needed
    };

    // Array with capitalized link names
    const links = ['Welcome', 'Staff', 'Students', 'Courses'];

    return (
        <div>
            <nav>
                <ul>
                    {links.map((link) => (
                        <li key={link}>
                            <a href="#" onClick={(ev) => handleNav(ev, link)}>
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;