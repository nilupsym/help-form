import { useState, useCallback } from "react";
import s from "./styles.module.css";

export const PersonalData = () => {
  const [active, setActive] = useState(0);

  return (
    <>
      <h2>{"Заповніть форму"}</h2>
      <div className={s.btnWrapper}>
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
      </div>
      <div className={s.wrapper}>
        <div>
          <div className={s.inpWrapper}>
            <div className={s.input}>
              <span className={s.inputName}>{"Ім'я"}</span>
              <input className={s.inp}></input>
            </div>
            <div className={s.input}>
              <span className={s.inputName}>{"Прізвище"}</span>
              <input className={s.inp}></input>
            </div>
          </div>
          <div className={s.input}>
            <span className={s.inputName}>{"Назва компанії, організації"}</span>
            <input className={s.inp}></input>
          </div>
          <div className={s.input}>
            <span className={s.inputName}>{"Email-адреса"}</span>
            <input className={s.inp}></input>
          </div>
          <div className={s.input}>
            <span className={s.inputName}>{"Номер телефону"}</span>
            <input className={s.inp}></input>
          </div>
        </div>

        <div>
          <div className={s.input}>
            <span className={s.inputName}>{"Назва компанії, організації"}</span>
            <input className={s.inp}></input>
          </div>
          <div className={s.inpWrapper}>
            <div className={s.input}>
              <span className={s.inputName}>{"Місто"}</span>
              <input className={s.inp}></input>
            </div>
            <div className={s.input}>
              <span className={s.inputName}>{"Штат, район"}</span>
              <input className={s.inp}></input>
            </div>
          </div>
          <div className={s.input}>
            <span className={s.inputName}>{"Адреса"}</span>
            <input className={s.inp}></input>
          </div>
          <div className={s.input}>
            <span className={s.inputName}>{"Поштовий індекс"}</span>
            <input className={s.inp}></input>
          </div>
        </div>
      </div>
    </>
  );
};
