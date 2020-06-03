import React from "react";
import Select from "../../../select/Select";
import { days, years, months } from "../../helpers/helpers";
import { useSelector } from "react-redux";
import { formState } from "../../../form/FormSlice";

const FormFooter = ({ values, setValues }) => {
  let state = useSelector(formState);
  return (
    <div className="formFooter">
      <div className="text">
        <span>Date of birth</span>
      </div>
      <div className="statement">
        <span>
          This will not be shown publicly. Confirm your age to receive the
          appropriate experience.
        </span>
      </div>

      <div className="formSelects">
        <div className="selectDCont">
          <Select
            value={state.birthMonth ? state.birthMonth : values.birthMonth}
            setValue={setValues.setBirthMonth}
            id={"sel1"}
            spanName={"Month"}
            optionValues={months}
          />
          <Select
            value={state.birthDay ? state.birthDay : values.birthDay}
            setValue={setValues.setBirthDay}
            id={"sel2"}
            spanName={"Day"}
            optionValues={days}
          />
          <Select
            value={state.birthYear ? state.birthYear : values.birthYear}
            setValue={setValues.setBirthYear}
            id={"sel3"}
            spanName={"Year"}
            optionValues={years}
          />
        </div>
      </div>
    </div>
  );
};

export default FormFooter;
