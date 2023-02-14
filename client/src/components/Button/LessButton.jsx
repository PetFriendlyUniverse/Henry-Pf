function LessButton ({component, onClick, value}) {
    return (
        <button 
        className="w-6 pb-1 text-center text-xl font-black text-white bg-red-700 rounded-lg hover:bg-red-800 focus:bg-red-900" 
        value={value}
        onClick={onClick}>
            {component}
        </button>
    )
}

export default LessButton;