export function Pill({isAvailable}) {
    const text = isAvailable ? 'Disponible para proyectos' : 'No disponible para proyectos'
    const bgColor = isAvailable ? 'bg-green-100' : 'bg-red-100'
    const borderColor = isAvailable ? 'border-green-300' : 'border-red-300'
    const textColor = isAvailable ? 'text-green-600' : 'text-red-600'
    const circleColor = isAvailable ? 'bg-green-600' : 'bg-red-600'

    return (
        <div className={`inline-flex items-center px-4 py-1 border-s rounded-full lg:float-end sm:float-start sm:mt-6 border ${bgColor} ${borderColor} ${textColor}`}>
            <div className="relative flex mr-2">
                <span className="relative flex size-2">
                    <span className={`${circleColor} animate-ping absolute inline-flex h-full w-full rounded-full opacity-75`}></span>
                    <span className={`${circleColor} relative inline-flex rounded-full size-2`}></span>
                </span>
            </div>
            <div>
                <span className={` ${textColor} text-xs font-medium`}>
                    {text}
                </span>
            </div>
        </div>
    )
}