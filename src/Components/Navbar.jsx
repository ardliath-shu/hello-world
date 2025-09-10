const Navbar = () =>{

const handleNav = (ev, page) => {
    ev.preventDefault(); // Stop default navigation behavior
    console.log(`The ${page} link was clicked.`);
    // You can add logic here to update the parent component or perform other actions
};

    return(
 <div>
            <nav>
                <menu>
                    <li><a href="#" onClick={(ev) => handleNav(ev, 'home')}>Home</a></li>
                    <li><a href="#" onClick={(ev) => handleNav(ev, 'staff')}>Staff</a></li>
                    <li><a href="#" onClick={(ev) => handleNav(ev, 'students')}>Students</a></li>
                    <li><a href="#" onClick={(ev) => handleNav(ev, 'courses')}>Courses</a></li>
                </menu>
            </nav>
        </div>
    )
}

export default Navbar;