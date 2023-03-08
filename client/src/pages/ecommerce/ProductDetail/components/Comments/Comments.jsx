function Comments({ comments }) {
  return (
    <div className="mx-auto w-4/5 ">
      {!!comments?.length ? (
        comments?.map((c, i) => (
          <div
            key={c.user + i}
            className="m-4 flex w-3/5 flex-col rounded-md bg-white p-2"
          >
            <p>{c.user}</p>
            <p>{c.comment}</p>
            <span className="self-end text-gray-300">
              {c.date.split("T")[0]}
            </span>
          </div>
        ))
      ) : (
        <p>Actualmente este producto no posee comentarios</p>
      )}
    </div>
  );
}

export default Comments;
