import './HeaderStyle.css'

export default function Header() {
    return (
    <header className="z-50">
        <nav>
            <div className="logo">
                <a href="/">Chinurum Omenuko</a>
            </div>

            <div className="nav-items">
                <a href="">About Me</a>
                <a href="">Projects</a>
                <a href="">Resume</a>
                <a href="">Contacts</a>
            </div>

            <div className="github">
                <button><a href="https://github.com/Chinurum-Omenuko">My Github</a></button>
            </div>
        </nav>
    </header>
    );
}