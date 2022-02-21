import { CompanyAddress } from "./CompanyAddress/CompanyAddress";
import { CompanyData } from "./CompanyData/CompanyData";
import { SelectPersonButtons } from "./SelectPersonButtons/SelectPersonButtons";
import s from "./styles.module.css";

export const PersonalData = () => {
  return (
    <>
      <h2>{"Заповніть форму"}</h2>
      <SelectPersonButtons />
      <div className={s.wrapper}>
        <CompanyData />
        <CompanyAddress />
      </div>
    </>
  );
};
