export default function Collapse() {
    return(
    <div className="collapse bg-base-200 collapse-arrow">
        <input type="checkbox" /> 
        <div className="text-xl font-medium collapse-title">
            Click me to show/hide content
        </div>
        <div className="collapse-content"> 
            <p>hello</p>
        </div>
    </div>
    )
}