import { BOOKED_CHAIR, DELETE_CHAIR, PAYMENT_CHAIR } from "../types/datgheType";

export const bookedChair = (payload) => {
  return {
    type: BOOKED_CHAIR,
    payload,
  };
};

export const deleteChairAction = (payload) => {
  return {
    type: DELETE_CHAIR,
    payload,
  };
};

export const paymentChairAction = () => {
  return {
    type: PAYMENT_CHAIR,
  };
};
