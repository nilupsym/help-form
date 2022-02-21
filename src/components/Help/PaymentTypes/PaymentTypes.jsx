import { useCallback, useState } from "react";
import s from "./styles.module.css";

export const PaymentTypes = () => {
  const [activePay, setActivePay] = useState(5);

  return (
    <>
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
    </>
  );
};
