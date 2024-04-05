export function Meter({barName, barId, barCol, barWide, children}) {
    var meter = {
        name: barName,
        id: barId,
        style: {
            height: "5vh",
            width: "40vw",
            minWidth: "250px",
            border: "1px solid black",
            borderRadius: "10px",
            padding: "3px",
            backgroundColor: "white",
            display: "inline-block",
            margin: "2vw"
        },
        subStyle: {
            height: "100%",
            width: barWide,
            backgroundColor: barCol,
            borderRadius: "8px"
        }
    }

    return (
        <div style={meter.style} className="meter">
            <div style={meter.subStyle} className="sub-meter">
                <span>{children}</span>
            </div>
        </div>
    )
}