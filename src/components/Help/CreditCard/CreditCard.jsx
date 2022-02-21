import s from "./styles.module.css";

export const CreditCard = () => {
  return (
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
  );
};
