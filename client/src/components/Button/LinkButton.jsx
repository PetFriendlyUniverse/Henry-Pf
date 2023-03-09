function LinkButton({ component, onClick }) {
  return (
    <div className="flex w-full justify-center">
      <button
        onClick={onClick}
        className="mx-3 w-1/2 justify-center rounded-md bg-blue-900 px-3 py-2 text-center text-sm font-medium text-white shadow-md shadow-black transition-all duration-200 hover:bg-blueHover active:translate-y-1 "
      >
        {component}
      </button>
    </div>
  );
}

export default LinkButton;
