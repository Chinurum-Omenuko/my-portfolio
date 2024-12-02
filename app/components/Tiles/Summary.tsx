
import ring from '../../../public/ring.svg';
import "./summarystyles.css"

export default function Summary() {
    return (
        <div className="item item4 flex flex-col items-start justify-between ">
            <div className="image">
                <img src={ring.src} alt="" className='rotate-image'/>
            </div>
            <div className="text">
                <p>Chinurum Omenuko is an experienced Full stack developer, specializing in full scale web/software application creation using a suite of tools, programming languages and development principles.</p>
            </div>
        </div>
    );
}