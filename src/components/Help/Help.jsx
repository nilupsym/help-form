import { CreditCard } from "./CreditCard/CreditCard";
import { HelpTypes } from "./HelpTypes/HelpTypes";
import { PaymentTypes } from "./PaymentTypes/PaymentTypes";
import s from "./styles.module.css";

export const Help = () => {
  return (
    <>
      <HelpTypes />
      <div className={s.payment}>
        <PaymentTypes />
        <CreditCard />
      </div>
      <button className={s.btn}>
        <b>{"Допомогти"}</b>
      </button>
    </>
  );
};
