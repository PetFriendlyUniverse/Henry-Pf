function Comments({ comments }) {
  return (
    <div className=" flex w-3/5 items-start">
      {!!comments?.length ? (
        comments?.map((c, i) => (
          <div
            key={c.user + i}
            className="m-4 flex w-3/5 flex-col rounded-md bg-slate-50 p-2  font-sans text-lg font-normal xsm:w-[370px]"
          >
            <p className="pl-2 text-lg font-bold text-gray-700">{c.user}</p>
            <p className="pl-2 text-gray-700">{c.comment}</p>
            <span className="self-end italic text-gray-400">
              {c.date.split("T")[0]}
            </span>
          </div>
        ))
      ) : (
        <p className="font-semibold xsm:text-sm md:text-sm lg:text-sm">
          Actualmente este producto no posee comentarios
        </p>
      )}
    </div>
  );
}

export default Comments;
