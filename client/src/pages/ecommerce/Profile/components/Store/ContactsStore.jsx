function ContactsStore({ area_code, number, mail }) {
  return (
    <div class="flex w-full flex-col justify-between py-6 px-4  pt-2">
      <div className="w-full rounded-2xl border-2  px-4 pt-2  sm:px-0  xl:flex-row">
        <table className="flex w-full border-collapse flex-col ">
          <tr className="flex justify-around bg-white py-1">
            <th className="w-1/2 border-r-2 border-gray-500 ">
              <h4 className="font-bold">Telefóno</h4>
            </th>
            <th className="w-1/2 ">
              <h4 className=" font-bold">Mail:</h4>
            </th>
          </tr>
          <tr className="flex justify-around bg-slate-200 py-1">
            <th className="w-1/2 border-r-2 border-white">
              <p>{`${area_code}-${number}`}</p>
            </th>
            <th className="w-1/2">
              <p>{mail}</p>
            </th>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default ContactsStore;
