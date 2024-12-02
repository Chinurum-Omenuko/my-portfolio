import arrow from '../../../public/arrow.svg'
import resume from '../../../public/omenuko_resume.png'
export default function ResumeTile() {
    return(
        <section className="resume-tile item item6">
            <div className="flex flex-row justify-between w-full ">
                <h3>Resume</h3>
            </div>
            <div className="resume-img-container h-28 border border-r-emerald-700">
                <a href="https://drive.google.com/file/d/1fiRIyTyOhi3_m2fgdm-cx0Lz1iebRVfp/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <img src={resume.src} alt="" className='object-cover' id='resume-pic'/>
                </a>
            </div>
        </section>
    )
}