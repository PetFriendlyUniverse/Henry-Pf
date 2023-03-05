function DispatchtimeImg({ color }) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          // fill="#000000"
          d="M512 896a320 320 0 1 0 0-640 320 320 0 0 0 0 640zm0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768z"
        ></path>
        <path
          // fill="#000000"
          d="M512 320a32 32 0 0 1 32 32l-.512 224a32 32 0 1 1-64 0L480 352a32 32 0 0 1 32-32z"
        ></path>
        <path
          // fill="#000000"
          d="M448 576a64 64 0 1 0 128 0 64 64 0 1 0-128 0zm96-448v128h-64V128h-96a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64h-96z"
        ></path>
      </g>
    </svg>
  );
}

export default DispatchtimeImg;
