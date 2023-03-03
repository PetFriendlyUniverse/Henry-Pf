function Construccion() {
  return (
    <div className="flex  items-center justify-center  ">
      <div className="mx-auto flex h-full w-4/5 items-center justify-center">
        <div className="flex w-1/2 flex-col items-center justify-center gap-16">
          <h2 className="text-center text-5xl font-bold uppercase">
            Este sector se encuentra
            <span className="text-russianviolet"> en construcción</span>
          </h2>
        </div>
        <div className="flex w-1/2 items-end">
          <img
            src="https://img.freepik.com/premium-vector/dog-handler-volunteering-with-pets-dog-walking-service-vector-illustration_131590-418.jpg?w=2000"
            alt=""
            className=""
          />
        </div>
      </div>
    </div>
  );
}

export default Construccion;
