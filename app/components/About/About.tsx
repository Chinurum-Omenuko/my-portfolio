import profilePic from '../../profilepic.jpeg';

export default function About(): JSX.Element{
    return(
    <section id="about" className="grid h-screen bg-black sm:p-10 lg:p-20 place-items-center">
        <div className="container mx-auto">
            <div className="grid md:grid-cols-2 place-items-center">
                <h2 className="mb-3 text-2xl text-bold">Chinurum Omenuko <br />Full Stack Web Developer</h2>
                <div>
                    <p className="mb-5 text-sm text-gray-400">Providing web solutions</p>
                    <p className="leading-10 text-justify text-gray-500">
                        Hello there! I'm a full stack web developer, and I'm very passionate and dedicated to my
                        work.
                        With more than 5 years of experience as a professional web developer,
                        With this time period I have acquired the skills and knowledge necessary to make your
                        project a success.
                        I enjoy every step of the development process, from discussion and collaboration.
                    </p>
                </div>
            </div>
        </div>
    </section>
    )
}