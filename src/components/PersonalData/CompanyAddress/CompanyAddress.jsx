import s from "./styles.module.css";

export const CompanyAddress = () => {
  return (
    <div>
      <div className={s.input}>
        <span className={s.inputName}>{"Країна"}</span>
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
  );
};
