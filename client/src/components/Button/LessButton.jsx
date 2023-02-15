function LessButton({ component, onClick, value }) {
  return (
    <button
      className=" focus:bg-red-900 w-full rounded-l-lg bg-slate-400 pb-1 text-center text-xl font-black text-white"
      value={value}
      onClick={onClick}
    >
      {component}
    </button>
  );
}

export default LessButton;
