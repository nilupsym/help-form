import s from "./styles.module.css";

export const CompanyData = () => {
  return (
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
  );
};
