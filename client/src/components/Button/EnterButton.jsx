function EnterButton({ component }) {
  return (
    <button className="mr-2 mb-2 rounded-full border border-slate-200 bg-slate-300 py-2.5 px-5 text-sm font-medium text-gray-900 transition delay-100 duration-700 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 hover:text-gray-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200">
      {component}
    </button>
  );
}

export default EnterButton;
