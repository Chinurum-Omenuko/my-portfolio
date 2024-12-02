import './Projects.css'
import Image from 'next/image'

export default function Projects() {
    return(
    <div id="projects" className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-black mx-10">
        <div>
            <a href="https://infeu.vercel.app/">
                <Image className="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/51951/forest-fire-fire-smoke-conservation-51951.jpeg?cs=srgb&dl=pexels-pixabay-51951.jpg&fm=jpg&_gl=1*1c2xu9l*_ga*NzgyNDIzMjAxLjE3MDQ4ODE4Njc.*_ga_8JE65Q40S6*MTcwNDg4MTg2Ny4xLjEuMTcwNDg4MjE0NC4wLjAuMA.." alt="" width={500} height={300} />
            </a>
            <p>Infeu: Fire tracker</p>
        </div>
        <div>
            <a href="https://onpoint-drivers.vercel.app/">
                <Image className="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/13861/IMG_3496bfree.jpg?cs=srgb&dl=pexels-jeshootscom-13861.jpg&fm=jpg&_gl=1*1r2momg*_ga*NzgyNDIzMjAxLjE3MDQ4ODE4Njc.*_ga_8JE65Q40S6*MTcwNDg4MTg2Ny4xLjEuMTcwNDg4MjA2OC4wLjAuMA.." alt="" width={500} height={300} />
            </a>
            <p>On Point Drivers Driving school</p>
        </div>
    </div>

    )
}