import React from 'react';

function Footer() {
    return (
            <div classNameName='footer'>
            <ul className="footer__grid__container">
                <li className="footer__item"><a href="#" className="footer__link">About</a></li>
                <li className="footer__item"><a href="#" className="footer__link">Help Center</a></li>
                <li className="footer__item"><a href="#" className="footer__link">Terms</a></li>
                <li className="footer__item"><a href="#" className="footer__link">Privacy policy</a></li>
                <li className="footer__item"><a href="#" className="footer__link">Cookies</a></li>
                <li className="footer__item">
                <p className="footer__item">&copy; 2020 NashTheCoder.</p>
                </li>
            </ul>
        </div>
    )
}

export default Footer
