import * as React from 'react';
import logo from '../assets/images/butter-cms-logo.png';

const Footer = () => 
    (
        <footer>
            <div className="attribution">Headless CMS provided by</div>
            <a href="https://buttercms.com">
                <img className="attributionImage" src={logo} alt="Butter CMS Logo"/>
            </a>
        </footer>

    );


export default Footer;