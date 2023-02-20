import { useState } from "react";
function useToggleBoolean(val = false) {
  const [active, setActive] = useState(val);
  const toggle = () => {
    setActive((prev) => !prev);
  };
  return [active, toggle];
}

export default useToggleBoolean;
