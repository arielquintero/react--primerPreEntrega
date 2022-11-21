import CartWidget from "./CartWidget";
import "./NavBar.scss";

const NavBar = () => {
    return (
        <div className="nav-bar">
            <span className="brand">Ecommers</span>
            <section className="flex-links">
                <p className="link link-home" href="#h">
                    Home
                </p>
                <p className="link link-article" href="#h">
                    Article
                </p>
                <p className="link link-contact" href="#h">
                    Contact
                </p>
            </section>
            <CartWidget />
        </div>
    );
};

export default NavBar;
