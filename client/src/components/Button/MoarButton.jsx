function MoarButton({ component, onClick, value }) {
  return (
    <button
      className="hover:bg-green-800 focus:bg-green-800 w-full rounded-r-lg bg-sky-600 pb-1 text-center text-xl font-black text-white"
      value={value}
      onClick={onClick}
    >
      {component}
    </button>
  );
}

export default MoarButton;
