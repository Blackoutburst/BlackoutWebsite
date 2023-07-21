export const Tooltip = ({ message, children }) => {
    return (
        <div className="relative flex flex-col items-center group">
            {children}
            <div className="absolute bottom-0 flex-col items-center hidden mb-8 group-hover:flex">
           <span className="relative z-10 p-2 text-sm leading-none text-white whitespace-no-wrap bg-purple-950 shadow-lg rounded-md">
             {message}
           </span>
                <div className="w-3 h-3 -mt-2 rotate-45 bg-purple-950"></div>
            </div>
        </div>
    )
}
