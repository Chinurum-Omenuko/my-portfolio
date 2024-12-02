import profilepic from "../../../public/pf.png"
export default function Picture() {
    return(
        <div className="item item2 canvas">
            <div className="image-container">
                
                <img src={profilepic.src} alt="" className="object-cover" id="profile-pic"/>
            
            </div>
        </div>
    )
}