import { useState, useCallback } from "react";
import s from "./styles.module.css";

export const SelectPersonButtons = () => {
  const [active, setActive] = useState(0);

  return (
    <>
      <button
        className={active === 0 ? s.btnActive : s.btn}
        onClick={useCallback(() => setActive(0), [])}
      >
        {"Фіз. особа"}
      </button>
      <button
        className={active === 1 ? s.btnActive : s.btn}
        onClick={useCallback(() => setActive(1), [])}
      >
        {"Юр. особа"}
      </button>
    </>
  );
};
