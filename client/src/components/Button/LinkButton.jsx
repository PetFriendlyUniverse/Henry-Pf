function LinkButton({ component }) {
  return (
    <button className="focus:bg-blue-900 mx-3 rounded-lg bg-blue px-3 py-2 text-center text-sm font-medium text-white shadow-md hover:bg-blueHover">
      {component}
    </button>
  );
}

export default LinkButton;
