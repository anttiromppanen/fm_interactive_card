import CardBack from "./components/CardBack";
import CardFront from "./components/CardFront";
import CreditCardForm from "./components/CreditCardForm";
import FormSubmitted from "./components/FormSubmitted";
import useFormStore from "./store/useFormStore";

function App() {
  const formSubmitted = useFormStore((state) => state.formSubmitted);
  return (
    <div className="flex h-[100dvh] w-full flex-col items-center lg:h-screen lg:flex-row">
      <div
        className="
        bg-userMainBgMobile lg:bg-userMainBgDesktop min-h-[240px] w-full
        bg-cover lg:h-full lg:max-w-[480px]"
      />
      <div className="-mt-52 lg:-ml-[440px] lg:mt-0 xl:-ml-72">
        <CardBack />
        <CardFront />
      </div>
      <div className="-mt-2 flex w-full items-center justify-center px-4 lg:h-screen">
        <div className="w-full max-w-[382px] lg:w-[382px]">
          {formSubmitted ? <FormSubmitted /> : <CreditCardForm />}
        </div>
      </div>
    </div>
  );
}

export default App;
