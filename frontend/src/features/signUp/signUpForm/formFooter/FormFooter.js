import React from "react";
import Select from "../../../select/Select";
import { days, years, months } from "../../helpers/helpers";

const FormFooter = () => {
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
          <Select id={"sel1"} spanName={"Month"} optionValues={months} />
          <Select id={"sel2"} spanName={"Day"} optionValues={days} />
          <Select id={"sel3"} spanName={"Year"} optionValues={years} />
        </div>
      </div>
    </div>
  );
};

export default FormFooter;
