import Image from 'next/image';
import './About.css'
import profilePic from '../../profilepic.jpeg';

export default function About(): JSX.Element{
   return(
    <section className=" bg-white h-auto">  
        <div className="gridholder m-10 text-gray-600 md:px-12 xl:px-6">
          <div className="image">
            <img src="https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          </div>
          <div className="about">
            <div className="heading">
                <h2 className="text-3xl">Chinurum Omenuko: Fullstack web developer</h2>
            </div>
            <div className="content">
                <div className="content1"></div>
                <div className="content2"></div>
            </div>
          </div>
        </div>
    </section>
    )
}
