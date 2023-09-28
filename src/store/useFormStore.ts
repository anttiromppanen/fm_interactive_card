import { create } from "zustand";

interface Fields {
  name: string;
  cardNumber: string;
  expMonth: string;
  expYear: string;
  cvc: string;
}

interface State {
  fields: Fields;
  formSubmitted: boolean;
}

interface Actions {
  updateFields: (newFields: Partial<Fields>) => void;
  setFormSubmitted: () => void;
}

const useFormStore = create<State & Actions>()((set) => ({
  fields: {
    name: "JANE APPLESEED",
    cardNumber: "0000 0000 0000 0000",
    expMonth: "00",
    expYear: "00",
    cvc: "000",
  },
  formSubmitted: false,
  updateFields: (newFields) =>
    set((state) => ({
      fields: {
        ...state.fields,
        ...newFields,
      },
    })),
  setFormSubmitted: () => set({ formSubmitted: true }),
}));

export default useFormStore;
