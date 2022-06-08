import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="text-center p-4">
            <h3 className="text-4xl">I'm the header</h3>
            <p>Here some links</p>
            <nav className="flex justify-center mt-2 gap-7">
                <Link className="mr-3 text-xl" to="/">Home</Link>
                <Link className="text-xl" to="/cats">Cats</Link>
            </nav>
        </header>
    );
};

export default Header;
