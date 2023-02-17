function PersonalInfo() {
  return (
    <div>
      <div className="flex justify-between pt-6">
        <div className="w-[600px] pl-16">
          <div className="flex justify-between pt-2">
            <div>
              <h6 className="font-bold">Nombre completo:</h6>
              <p>{`Jennifer Aniston`}</p>
            </div>
            <div>
              <h6 className="font-bold">Nombre de Usuario:</h6>
              <p>{`JennAniston`}</p>
            </div>
            <div>
              <h6 className="font-bold">Contraseña:</h6>
              <p>{`***************`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
