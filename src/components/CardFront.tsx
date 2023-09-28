import { useEffect, useState } from "react";
import cardLogo from "../assets/images/card-logo.svg";
import useFormStore from "../store/useFormStore";

function CardFront() {
  const formValues = useFormStore((state) => state.fields);
  const [cardNumber, setCardNumber] = useState("");
  const [name, setName] = useState("");
  const [expDate, setExpDate] = useState("");

  useEffect(() => {
    setCardNumber(formValues.cardNumber);
    setName(formValues.name.toUpperCase());
    setExpDate(`${formValues.expMonth}/${formValues.expYear}`);
  }, [formValues]);

  return (
    <div
      className="
          bg-userCardFrontBg relative -left-6 -top-16 h-[160px] w-[288px]
          select-none rounded-lg bg-cover p-5 text-userLightGrayViolet
          shadow-2xl lg:-top-72 lg:h-[250px] lg:w-[450px] lg:p-8"
    >
      <img
        src={cardLogo}
        alt="Card logo"
        className="
          mb-9 h-[32px] w-[56px] lg:mb-16 lg:h-[50px] 
          lg:w-[87px]"
      />
      <p className="mb-2 text-lg tracking-widest lg:mb-6 lg:text-2xl">
        {cardNumber}
      </p>
      <div className="flex justify-between text-xs tracking-widest lg:text-base">
        <p>{name}</p>
        <p>{expDate}</p>
      </div>
    </div>
  );
}

export default CardFront;
