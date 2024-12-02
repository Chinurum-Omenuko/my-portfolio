import twitter from '../../../public/twitter.png'
import instagram from '../../../public/instagram.png'
import github from '../../../public/github.png'
export default function Search() {
    return(
        <section className="search item item3 px-6">
            <div className="searchbox flex flex-row items-center justify-around border-solid">
                
                <a href="https://x.com/ChinurumO"><img src={twitter.src} alt="" className='h-10'/></a>
                <a href="https://www.instagram.com/chinurum/?hl=en"><img src={instagram.src} alt="" className='h-10'/></a>
                <a href="https://github.com/Chinurum-Omenuko"><img src={github.src} alt="" className='h-10'/></a>
   
                
            </div>
        </section>
    )
}