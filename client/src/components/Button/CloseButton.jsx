function CloseButton ({component, onClick}) {
    return (
        <button 
        className="px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800"
        onClick={onClick}>
            {component}
        </button>
    )
}

export default CloseButton;