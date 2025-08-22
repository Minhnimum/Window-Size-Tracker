import React from "react"

export default function WindowTracker() {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    const [windowHeight, setWindowHeight] = React.useState(window.innerHeight)


    React.useEffect(() => {
        function watchWindowSize () {
            console.log("Resized")
            setWindowWidth(window.innerWidth)
            setWindowHeight(window.innerHeight)
        }
        window.addEventListener("resize", watchWindowSize)
        return function() {
            console.log("Cleaning up...")
            window.removeEventListener("resize", watchWindowSize)
        }
    }, [])
    
    return (
        <>
            <h1>Window width: {windowWidth}</h1>
            <h1>Window height: {windowHeight}</h1>
            <h1>Ratio (W/H): {(windowWidth / windowHeight).toFixed(4)}</h1>
        </>
    )
}
