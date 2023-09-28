/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Form, Formik } from "formik";
import * as Yup from "yup";
import valid from "card-validator";
import StyledField from "./StyledField";
import useFormStore from "../store/useFormStore";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(4, "Name must be at least 4 characters long")
    .required("Can't be blank"),
  cardNumber: Yup.string()
    .transform((originalValue) => originalValue.replace(/ /g, ""))
    .matches(/^[0-9]+$/, "Wrong format, use numbers only")
    .max(18, "Credit card number cannot have more than 18 numbers")
    .min(12, "Credit card number must have at least 12 numbers")
    .required("Can't be blank"),
  expMonth: Yup.string()
    .test(
      "test-month",
      "Wrong format, use MM",
      (value) => valid.expirationMonth(value).isValid,
    )
    .max(2, "Maximum 2 numbers")
    .required("Can't be blank"),
  expYear: Yup.string()
    .test(
      "test-year",
      "Wrong format, use YY",
      (value) => valid.expirationYear(value).isValid,
    )
    .max(2, "Maximum 2 numbers")
    .required("Can't be blank"),
  cvc: Yup.string()
    .test(
      "test-cvc",
      "CVC format incorrect",
      (value) => valid.cvv(value).isValid,
    )
    .required("Can't be blank"),
});

function CreditCardForm() {
  const handleSubmitForm = useFormStore((state) => state.setFormSubmitted);

  return (
    <Formik
      initialValues={{
        name: "",
        cardNumber: "",
        expMonth: "",
        expYear: "",
        cvc: "",
      }}
      validationSchema={validationSchema}
      onSubmit={() => handleSubmitForm()}
    >
      <Form className="flex flex-col gap-y-3">
        <div>
          <StyledField
            label="CARDHOLDER NAME"
            name="name"
            placeholder="e.g. Jane Appleseed"
          />
        </div>
        <div>
          <StyledField
            label="CARD NUMBER"
            name="cardNumber"
            placeholder="e.g. 1234 5678 9123 0000"
          />
        </div>
        <div className="grid grid-cols-4 gap-x-3">
          <div className="col-span-1">
            <StyledField
              label="EXP. DATE"
              name="expMonth"
              placeholder="MM"
              hideErrorText
            />
          </div>
          <div className="col-span-1">
            <StyledField
              label="(MM/YY)"
              name="expYear"
              placeholder="YY"
              labelStyles="-ml-3 lg:-ml-6"
              hideErrorText
            />
          </div>
          <div className="col-span-2">
            <StyledField label="CVC" name="cvc" placeholder="e.g. 123" />
          </div>
        </div>
        <button
          type="submit"
          className="
            mt-2 w-full rounded-lg bg-userVeryDarkViolet py-4 text-userLightGrayViolet
            hover:brightness-150"
        >
          Confirm
        </button>
      </Form>
    </Formik>
  );
}

export default CreditCardForm;
