import React from "react";


const year = new Date().getFullYear();

function Footer(){
    return(
        <footer>
            <h1>
                <p>Copyright @{year}</p>
            </h1>
        </footer>
    )
}

export default Footer;