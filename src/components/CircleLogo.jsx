import { useEffect, useRef } from "react"


const CircleLogo = () => {

    const pElement = useRef(null)

    useEffect(() => {
        if (pElement.current) {
            pElement.current.innerHTML = pElement.current.innerText.split("").map(
                (char, i) => `<span style="transform:rotate(${i * 8.1}deg">${char}</span>`
            ).join("")
        }
    })

  return (
    <div className="relative circle rounded-full w-[200px] h-[200px]
                    border-whiteA70 border-2 flex justify-center items-center">
      <div className="logoImg absolute w-[120px] h-[120px] rounded-full"></div>
      <div className="text absolute w-full h-full" id="textRotate">
        <p ref={pElement}>
          John  Cool - Photographer - 
        </p>
        </div>
    </div>
  )
}

export default CircleLogo