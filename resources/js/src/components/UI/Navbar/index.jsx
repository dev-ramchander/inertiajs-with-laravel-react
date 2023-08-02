import { Link } from '@inertiajs/react'
import { ROUTE_SLUGS } from '../../../app/constants';

function Navbar() {
    return (
        <>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" href={ROUTE_SLUGS.ROOT}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href={ROUTE_SLUGS.ABOUT_US}>About Us</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href={ROUTE_SLUGS.CONTACT_US}>Contact us</Link>
                </li>
            </ul>
        </>
    );
}
export default Navbar;