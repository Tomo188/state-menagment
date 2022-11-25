import { useRef, useEffect } from "react";
export function Ref() {
  const refInput = useRef(null);
  useEffect(() => {
    refInput.current.style.backgroundColor="red";
    refInput.current.onclick=()=>{
      refInput.current.style.backgroundColor="blue";
    }
  }, []);
  return (
    <article>
      <input type="text" ref={refInput} />
    </article>
  );
}
