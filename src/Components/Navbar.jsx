const Navbar = () => {
    return (
        <>
            <nav className="container">

                <div className="logo">
                    <img src="../public/Images/brand_logo.png" alt="brand logo" />
                </div>

                <ul>
                    <li href="#">MENU</li>
                    <li href="#">LOCATION</li>
                    <li href="#">ABOUT</li>
                    <li href="#">CONTACT</li>
                </ul>
                <button className="login-btn">Login</button>
            </nav>
        </>
    )
}

export default Navbar