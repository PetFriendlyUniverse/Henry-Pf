//onClick va a recibir si o si una funcion llamada ¡¡¡ handleClickDeduct !!!
function LessButton({ component, onClick, value }) {
  return (
    <button
      className=" w-full rounded-l-lg bg-slate-400 pb-1 text-center text-xl font-black text-white  hover:bg-red-900"
      value={value}
      onClick={onClick}
    >
      {component}
    </button>
  );
}

export default LessButton;
