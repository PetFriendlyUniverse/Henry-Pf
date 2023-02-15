function LinkButton({ component }) {
  return (
    <button className="mx-3 rounded-lg bg-blue-900 px-3 py-2 text-center text-sm font-medium text-white shadow-md hover:bg-blueHover focus:bg-blue-900">
      {component}
    </button>
  );
}

export default LinkButton;
