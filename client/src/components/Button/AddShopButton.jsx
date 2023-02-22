function AddShopButton({ component, onClick }) {
  return (
    <button
      onClick={onClick}
      className=" h-full w-full rounded-lg bg-green-500 px-2 py-1 font-bold  text-white hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-emerald-900"
    >
      {component}
    </button>
  );
}

export default AddShopButton;
