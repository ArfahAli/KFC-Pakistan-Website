const Footer =()=>{

    return(
    <div>
         <div className="footer">
        <div className="container">

            <div className="socialIcons">
                <a href=""><img src="Images/KFC-Logo.png"/></a>
                <div><i class="fa-regular fa-pipe fa-lg"></i></div>
                <div><h3>Find us on</h3>
                <div className="icons">
                <a href="https://cdnlogo.com/logo/youtube_39398.html"><img src="https://cdn.cdnlogo.com/logos/y/84/youtube.svg"/></a>
                <a href="https://cdnlogo.com/logo/instagram_475.html"><img src="https://cdn.cdnlogo.com/logos/i/92/instagram.svg"/></a>
                <a href="https://cdnlogo.com/logo/facebook-2020-1_127418.html"><img src="https://cdn.cdnlogo.com/logos/f/24/facebook-2020-1.svg"/></a>
                </div>                
                </div>
            </div>

            <div className="row">


                <div className="footer-col-3">
                    <h3>Information</h3>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Mitao Bhook</a></li>
                        <li><a href="#">Mitao Bhook - Scholarship</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Careers</a></li>
                        
                    </ul>
                </div>
                <div className="footer-col-4">
                    <h3>Locations</h3>
                <ul>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
            <div className="footer-col-5">
                    <h3>Get in Touch</h3>
                <ul>
                    <li><a href="#">Terms & Conditions</a></li>
                </ul>
            </div>
            <div className="footer-col-1">
                   
                    <div className="app-logos">
                        <img src="Images/app-store.png" alt=""/>
                        <img src="Images/google-store.png" alt=""/>
                    </div>

                </div>

            </div>
            <hr/>
            <p className="copyright">Copyrights reserved by Arfah Ali - 2023</p>
        </div>
    </div>

    </div>
    
    );
}
export default Footer;