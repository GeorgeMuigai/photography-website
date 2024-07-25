export const LogoBig = () => {
    return(
        <div className="logo-big cursor-pointer w-fit">
        <span className="flex items-center gap-2 font-recoleta font-bold text-2xl"><Logo/> Cool</span>
        </div>
    )
}

const Logo = () => {
  return (
    <div className="logo p-3 text-black bg-white w-[40px] h-[40px]
    flex items-center justify-center rounded-full cursor-pointer">
        <h2 className="font-recoleta font-semibold ">J</h2>
    </div>
  )
}

export default Logo