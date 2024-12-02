export default function Tag() {
    return(
        <div className="item item1 grid-col-span-2">
            <h1>Projects</h1>
            <div className="grid grid-rows divide-y divide-black h-full">
            
                <div className="grid-item flex flex-row items-center justify-between">
                    <a href="https://onpoint-drivers.vercel.app/"><h1 className="font-bold">Driving School Site</h1></a>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className="grid-item flex flex-row items-center justify-between">
                    <a href="https://infeu.vercel.app/"><h1 className="font-bold">Infeu Project</h1></a>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className="grid-item flex flex-row items-center justify-between">
                    <a href="#"><h1 className="font-bold">PartnerSync Project</h1></a>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            
            </div>
        </div>
    )
}




// className="item item1 grid-col-span-2"