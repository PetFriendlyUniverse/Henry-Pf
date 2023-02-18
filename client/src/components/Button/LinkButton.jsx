function LinkButton({ component }) {
  return (
    <button className="white mx-3 rounded-lg px-3 py-2 text-center text-sm font-medium text-white shadow-md hover:bg-blueHover focus:bg-blue-900">
      {component} Register
    </button>
  );
}

export default LinkButton;
