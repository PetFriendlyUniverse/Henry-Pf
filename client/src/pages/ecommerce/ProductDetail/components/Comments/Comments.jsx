function Comments({ comments }) {
  return (
    <div className=" flex w-3/5 flex-col items-start">
      {!!comments?.length ? (
        comments?.map((c, i) => (
          <div
            key={c.user + i}
            className="m-4 flex w-3/5 flex-col rounded-md bg-slate-50  p-2 font-sans text-lg font-normal"
          >
            <p className="pl-2 text-lg font-bold text-gray-700">{c.user}</p>
            <p className="pl-2 text-gray-700">{c.comment}</p>
            <span className="self-end italic text-gray-400">
              {c.date.split("T")[0]}
            </span>
          </div>
        ))
      ) : (
        <p className=" font-semibold sm:text-xs md:text-base lg:text-base">
          Actualmente este producto no posee comentarios
        </p>
      )}
    </div>
  );
}

export default Comments;
