function Contacts() {
  return (
    <div>
      <div className="flex justify-between pt-6">
        <div className="w-[600px] pl-16">
          <div className="flex justify-between pt-2">
            <div>
              <h6 className="font-bold">Telefono:</h6>
              <p>{`123456789`}</p>
            </div>
            <div>
              <h6 className="font-bold">Contacto de emergencia:</h6>
              <p>{`987654321`}</p>
            </div>
            <div>
              <h6 className="font-bold">Correo Electronico:</h6>
              <p>{`jennaniston@gmail.com`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
