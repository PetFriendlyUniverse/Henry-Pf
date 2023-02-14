function LinkButton ({component}) {
    return (
        <button 
        className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:bg-blue-900">
            {component}
        </button>
    )
}

export default LinkButton;