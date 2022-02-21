import { useCallback, useState } from "react";
import s from "./styles.module.css";

export const HelpTypes = () => {
  const [active, setActive] = useState(1);
  return (
    <>
      <h2>{"Види допомоги"}</h2>
      <p>{"Ви можете змінити вид допомоги"}</p>
      <ul className={s.list}>
        <li
          className={active === 0 ? s.listItemActive : s.listItem}
          onClick={useCallback(() => setActive(0), [])}
        >
          {"Зробити"}
        </li>
        <li
          className={active === 1 ? s.listItemActive : s.listItem}
          onClick={useCallback(() => setActive(1), [])}
        >
          {"Фінансова допомога"}
        </li>
        <li
          className={active === 2 ? s.listItemActive : s.listItem}
          onClick={useCallback(() => setActive(2), [])}
        >
          {"Матеріальна допомога"}
        </li>
        <li
          className={active === 3 ? s.listItemActive : s.listItem}
          onClick={useCallback(() => setActive(3), [])}
        >
          {"Волонтерство"}
        </li>
      </ul>
    </>
  );
};
