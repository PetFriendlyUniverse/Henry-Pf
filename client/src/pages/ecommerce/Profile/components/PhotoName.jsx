import photoUser from "../../../../assets/borrador/profile.jpg";

function PhotoName() {
  return (
    <div class="flex flex-col items-center justify-center pt-2 sm:flex-row md:justify-between md:px-11">
      <div class="mb-4 w-56 sm:mb-0 sm:w-72 md:w-20">
        <img src={photoUser} alt="profile" class="rounded-full" />
      </div>
      <div class="mx-0 text-center sm:text-left">
        <h1 class="text-2xl font-black">{`Jennifer`}</h1>
      </div>
    </div>
  );
}

export default PhotoName;
