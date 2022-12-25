import chairList from "../../data/danhSachGhe.json";
import { BOOKED_CHAIR, DELETE_CHAIR, PAYMENT_CHAIR } from "../types/datgheType";

const DEFAULT_STATE = {
  chairList,
  chairSelected: [],
  total: 0,
};

export const datGheReducer = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case BOOKED_CHAIR:
      {
        const data = [...state.chairList];

        const data2 = [...state.chairSelected];

        const { hang, soGhe } = payload;

        const idx = data.findIndex((element) => element.hang === hang);

        const chair = data[idx].danhSachGhe.findIndex(
          (element) => element.soGhe === soGhe
        );

        if (data[idx].danhSachGhe[chair].daDat) return;

        if (!data[idx].danhSachGhe[chair].dangChon) {
          data[idx].danhSachGhe[chair].dangChon =
            !data[idx].danhSachGhe[chair].dangChon;
        }

        const chair2 = data2.findIndex(
          (ele) => ele === data[idx].danhSachGhe[chair]
        );

        if (chair2 === -1) {
          data2.push(data[idx].danhSachGhe[chair]);
        }

        let money = 0;

        for (let i = 0; i < data2.length; i++) {
          money += data2[i].gia;
        }

        state.chairList = data;

        state.chairSelected = data2;

        state.total = money;
      }

      break;

    case DELETE_CHAIR:
      {
        const data = [...state.chairList];

        const data2 = [...state.chairSelected];

        const idx = data2.findIndex((ele) => ele === payload);

        data2[idx].dangChon = !data2[idx].dangChon;
        data2.splice(idx, 1);

        let money = 0;

        for (let i = 0; i < data2.length; i++) {
          money += data2[i].gia;
        }

        state.total = money;
        state.chairSelected = data2;
        state.chairList = data;
      }
      break;

    case PAYMENT_CHAIR:
      {
        const data = [...state.chairList];
        let data2 = [...state.chairSelected];

        data2.forEach((element) => {
          element.dangChon = !element.dangChon;
          element.daDat = !element.daDat;
        });

        data2 = [];

        const money = 0;

        state.chairSelected = data2;
        state.chairList = data;
        state.total = money;
      }
      break;

    default:
      break;
  }
  return { ...state };
};
