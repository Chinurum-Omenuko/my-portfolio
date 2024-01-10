import profilePic from '../../profilepic.jpeg';

export default function About(): JSX.Element{
    return(
    <section id="about" className="grid h-screen bg-black sm:p-10 lg:p-20 place-items-center">
        <div className="title">
            <h2>About Me</h2>
        </div>
        <div className="container mx-auto">
            <div className="grid md:grid-cols-2 place-items-center">
                <h2 className="mb-3 text-2xl text-bold">Chinurum Omenuko <br />Full Stack Web Developer</h2>
                <div className='mx-8 borde border-solid'>
                
                    <p className="leading-10 text-justify text-white-500">
                        Hello im Chinurum Omenuko, a full stack web developer.
                    </p><br /><p>I am currently pursuing my degree in Global and International studies (with a specialization in communication) aswell as my diploma in Full Stack Web development.
                        <br />My ability to utilize the soft and hard skills from both academic endeavours, as well as eagerness to learn and constantly improve my knowldege in software development is one of my core strengths as a developer.</p>
                    
                </div>
            </div>
        </div>
    </section>
    )
}