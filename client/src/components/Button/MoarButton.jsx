function MoarButton ({component, onClick, value}) {
    return (
        <button 
        className="w-6 pb-1 text-center text-xl font-black text-white bg-green-700 rounded-lg hover:bg-green-800 focus:bg-green-800"
        value={value}
        onClick={onClick}>
            {component}
        </button>
    )
}

export default MoarButton;