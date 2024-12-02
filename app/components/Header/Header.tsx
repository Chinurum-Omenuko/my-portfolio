import './HeaderStyle.css'

export default function Header() {
    return (
    <header className="z-50">
        <nav className=''>
            <div className="logo">
                <a href="/">Chinurum Omenuko</a>
            </div>

            <div className="hidden nav-items lg:block">
                <h1>Full-stack web developer</h1>
                
            </div>

            <div className="flex flex-row justify-end drawer drawer-end lg:hidden">
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
                        <li><a href="https://github.com/Chinurum-Omenuko">GitHub</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#resume">Resume</a></li>
                        <li><a href="#conatcts">Contacts</a></li>
                        <li><a href="https://github.com/Chinurum-Omenuko">GitHub</a></li>

                        
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    );
}