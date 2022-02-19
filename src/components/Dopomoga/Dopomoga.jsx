import { useCallback, useState } from "react";
import s from "./styles.module.css";

export const Dopomoga = () => {
  const [active, setActive] = useState(1);
  const [activePay, setActivePay] = useState(5);
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
      <div className={s.oplata}>
        <div>
          <p className={s.title}>{"Спосіб оплати"}</p>
          <ul className={s.listPay}>
            <li
              className={activePay === 4 ? s.listPayItemActive : s.listPayItem}
              onClick={useCallback(() => setActivePay(4), [])}
            >
              {"Visa"}
            </li>
            <li
              className={activePay === 5 ? s.listPayItemActive : s.listPayItem}
              onClick={useCallback(() => setActivePay(5), [])}
            >
              {"Приват24"}
            </li>
            <li
              className={activePay === 6 ? s.listPayItemActive : s.listPayItem}
              onClick={useCallback(() => setActivePay(6), [])}
            >
              {"Термінали України"}
            </li>
            <li
              className={activePay === 7 ? s.listPayItemActive : s.listPayItem}
              onClick={useCallback(() => setActivePay(7), [])}
            >
              {"WebMoney"}
            </li>
            <li
              className={activePay === 8 ? s.listPayItemActive : s.listPayItem}
              onClick={useCallback(() => setActivePay(8), [])}
            >
              {"PayPal"}
            </li>
          </ul>
        </div>

        <div>
          <p className={s.title}>{"Введіть наступні дані"}</p>
          <div className={s.cardWrapper}>
            <p className={s.cardDataTitle}>{"Номер картки"}</p>
            <div className={s.cardNumber}>
              <input className={s.cardNumberInput} type="text" />
              <input className={s.cardNumberInput} type="text" />
              <input className={s.cardNumberInput} type="text" />
              <input className={s.cardNumberInput} type="text" />
            </div>
            <div className={s.cardData}>
              <div>
                <p className={s.cardDataTitle}>{"Термін дії"}</p>
                <input className={s.cardDataInput} type="text" />
              </div>
              <div>
                <p className={s.cardDataTitle}>{"CVC/CVV"}</p>
                <input className={s.cardDataInput} type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className={s.btn}>
        <b>{"Допомогти"}</b>
      </button>
    </>
  );
};
