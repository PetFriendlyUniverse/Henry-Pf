import photo from "../../../../../assets/general/profile.svg";

function PhotoStore({ name, img }) {
  return (
    <div className="flex flex-col items-center justify-center pt-2 md:justify-between md:px-11">
      <div className="mb-4 w-32 sm:mb-0">
        <img src={img || photo} alt="profile" className="rounded-full" />
      </div>
      <div className="mx-0 text-center sm:text-left">
        <h1 className="text-xl font-black">{name}</h1>
      </div>
    </div>
  );
}

export default PhotoStore;
