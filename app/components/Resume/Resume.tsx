

export default function Resume() {
    return(
        <section id="resume" className="grid h-screen bg-black place-items-center">
            <div className="title">
                <h2>Resume</h2>
            </div>

            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 place-items-center">
                    <div className="skills">
                        <h2 className="mb-5 text-xl">Frontend skills</h2>
                        <ul className="leading-10 text-justify skills-list">
                            <li>Creating components for single page applications using React and Svelte</li>
                            <li>Using javascript to make http request to various API Endpoints</li>
                            <li>Ensuring type safety, testing and debugging using typescript.</li>
                            <li>TailwindCSS + DaisyUI</li>
                            <li>Figma</li>
                        </ul>
                        
                    </div>
                    <div className="skills">
                        <h2 className="mb-5">Backend skills</h2>
                        <ul className="leading-10 text-justify skills-list">
                            <li>Creating components for single page applications using React and Svelte</li>
                            <li>Using javascript to make http request to various API Endpoints</li>
                            <li>Ensuring type safety, testing and debugging using typescript.</li>
                            <li>TailwindCSS + DaisyUI</li>
                            <li>Figma</li>
                        </ul>
                        
                    </div>
                    
                </div>
            </div>
            
        </section>
    )
}   