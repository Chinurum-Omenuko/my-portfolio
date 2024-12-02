import ContactMe from "../Tiles/ContactMe"
import Picture from "../Tiles/Picture"
import ResumeTile from "../Tiles/ResumeTile"
import Search from "../Tiles/Search"
import Summary from "../Tiles/Summary"
import Tag from "../Tiles/Tag"
import "./HomeLanding.css"
export default function HomeLanding() {
    return(
    <main className="">
        <Tag />
        <Picture />
        <Search />
        <Summary />
        <ContactMe />
        <ResumeTile />
    </main>
    )
}