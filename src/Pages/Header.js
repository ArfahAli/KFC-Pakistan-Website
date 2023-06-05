const Header =()=>{

    return(
    <div>
        <header>
        <div class="container">
        <div class="navbar">
            <div class="logo">
            <ul id="LeftItems">
                    <li><img src="Images/KFC-Logo.png" alt=""height="70px" width="70px"/></li>
                    <li><button className="devbutt"><img src="Images/1.png"/> Delivery</button></li>
                    <li><button className="devbutt"><img src="Images/2.png"/>Pick up</button></li>
                </ul>
            </div>
            <nav>
                <ul id="MenuItems">
                <li><button className="locationButt"><i class="fa-solid fa-location-crosshairs"></i>Select Location</button></li>
                <li><img src="Images/bucket.png" alt=""/></li>
                <li><button className="signButton">Register / Sign in</button></li>
                </ul>
            </nav>

        </div>
    </div>
    </header>
    </div>
    
    );
}
export default Header;