import completeIcon from "../assets/images/icon-complete.svg";

function FormSubmitted() {
  return (
    <div className="flex flex-col items-center text-center">
      <img
        src={completeIcon}
        alt="Complete icon"
        className="mb-10 h-[82px] w-[82px] lg:h-[123px] lg:w-[123px]"
      />
      <h1 className="mb-4 text-3xl tracking-widest text-userVeryDarkViolet lg:text-5xl">
        THANK YOU!
      </h1>
      <p className="mb-10 text-lg text-userDarkGrayViolet lg:text-xl">
        We&apos;ve added your card details
      </p>
      <button
        type="button"
        className="
          mt-2 w-full rounded-lg bg-userVeryDarkViolet py-4 text-userLightGrayViolet
          hover:brightness-150"
      >
        Continue
      </button>
    </div>
  );
}

export default FormSubmitted;
