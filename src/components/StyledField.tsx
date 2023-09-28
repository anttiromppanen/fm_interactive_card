/* eslint-disable react/jsx-props-no-spreading */
import {
  ErrorMessage,
  Field,
  FieldHookConfig,
  useField,
  useFormikContext,
} from "formik";
import { ChangeEvent, ClassAttributes, InputHTMLAttributes } from "react";
import useFormStore from "../store/useFormStore";

type StyledFieldProps = InputHTMLAttributes<HTMLInputElement> &
  ClassAttributes<HTMLInputElement> &
  FieldHookConfig<string> & {
    label: string;
    labelStyles?: string;
    inputStyles?: string;
    type?: string;
    hideErrorText?: boolean;
  };

function StyledField({
  label,
  labelStyles,
  inputStyles,
  type,
  hideErrorText,
  ...props
}: StyledFieldProps) {
  const updateFields = useFormStore((state) => state.updateFields);
  const { name } = props;
  const [field, meta] = useField(props);
  const formik = useFormikContext();

  const errorStyles = meta.touched && meta.error ? "border-userRed" : "";

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (field.name !== "cardNumber") {
      updateFields({ [name]: event.target.value });
      return formik.setFieldValue(name, event.target.value);
    }

    const inputValue = event.target.value;
    const sanitizedValue = inputValue.replace(/\s/g, ""); // Remove existing spaces

    if (sanitizedValue.length === 19) return sanitizedValue;

    const formattedValue =
      sanitizedValue &&
      sanitizedValue
        .replace(/\s/g, "")
        .match(/.{1,4}/g)
        .join(" ");

    updateFields({ cardNumber: formattedValue });
    return formik.setFieldValue("cardNumber", formattedValue);
  };

  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className={`
          text-sm tracking-wider text-userVeryDarkViolet
          ${labelStyles}`}
      >
        {label}
      </label>
      <Field
        {...props}
        onChange={handleInputChange}
        className={`
          relative mt-2 w-full rounded-lg border border-userLightGrayViolet py-3 pl-4
          text-lg focus:outline-userGradient2
          ${inputStyles + errorStyles}`}
      />
      <ErrorMessage name={name}>
        {(msg) => (
          <p
            className={`mt-2 text-sm text-userRed ${
              hideErrorText ? "hidden lg:block" : ""
            }`}
          >
            {msg}
          </p>
        )}
      </ErrorMessage>
    </div>
  );
}
StyledField.defaultProps = {
  type: "text",
  labelStyles: "",
  inputStyles: "",
  hideErrorText: false,
};

export default StyledField;
