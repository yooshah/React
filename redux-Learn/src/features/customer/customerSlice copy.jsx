const initialCustomerState = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

export default function customerReducer(state = initialCustomerState, action) {
  switch (action.type) {
    case "customer/createAccount":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: new Date(),
      };

    case "customer/updateName":
      return { ...state, fullName: action.payload };

    default:
      return state;
  }
}

export function createCustomer(fullName, nationalId) {
  return { type: "customer/createAccount", payload: { fullName, nationalId } };
}
export function updateName(updateName) {
  return { type: "customer/updateName", payload: updateName };
}
