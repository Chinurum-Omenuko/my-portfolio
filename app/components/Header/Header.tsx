import './HeaderStyle.css'

export default function Header() {
    return (
    <header className="z-50">
        <nav className=''>
            <div className="logo">
                <a href="/">C.O</a>
            </div>

            <div className="hidden nav-items">
                <a href="">About Me</a>
                <a href="">Projects</a>
                <a href="">Resume</a>
                <a href="">Contacts</a>
            </div>

            <div className="hidden github">
                <button><a href="https://github.com/Chinurum-Omenuko">My Github</a></button>
            </div>

            <div className="flex flex-row justify-end drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer-4" className="btn btn-primary drawer-button">
                        <svg viewBox="0 0 100 80" width="40" height="40">
                            <rect width="100" height="20" fill="white"></rect>
                            <rect y="30" width="100" height="20" fill="white"></rect>
                            <rect y="60" width="100" height="20" fill="white"></rect>
                        </svg>
                    </label>
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="flex flex-col items-center min-h-full p-4 justify-evenly menu w-80 bg-base-200 text-base-content">
                        <li><a href="">About Me</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">Resume</a></li>
                        <li><a href="">Contacts</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    );
}