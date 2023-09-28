import { useEffect, useState } from "react";
import useFormStore from "../store/useFormStore";

function CardBack() {
  const formValues = useFormStore((state) => state.fields);
  const [cvcValue, setcvcValue] = useState("");

  useEffect(() => {
    setcvcValue(formValues.cvc);
  }, [formValues]);

  return (
    <div
      className="
          bg-userCardBackBg relative -right-6 h-[160px] w-[288px]
          select-none rounded-lg bg-cover
          shadow-2xl lg:-bottom-64 lg:-right-10 lg:h-[250px]
          lg:w-[450px] xl:-right-20"
    >
      <p
        className="
        absolute right-9 top-[71px] text-xs text-userWhite
        lg:right-12 lg:top-28 lg:text-base"
      >
        {cvcValue}
      </p>
    </div>
  );
}

export default CardBack;
