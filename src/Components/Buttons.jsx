

function Buttons1({children, icon, className, onClick, onKeyDown}) {
  return (
     <button className={`inline-flex justify-center items-center font-medium font-inter py-3 px-4 md:gap-2 gap-1 lg:text-base md:text-sm text-xs text-white bg-[#EC157D] active:scale-105 hover:scale-10 hover:font-medium transition-transform duration-200 hover:bg-[#A50F58] hover:shadow-[rgba(165,15,88,0.12)]  active:bg-[#900D4C] rounded-lg ${className} `}
    onClick={onClick}
    onKeyDown={onKeyDown}
    >
      {children}{icon}
    </button>
  )
}

export default Buttons1