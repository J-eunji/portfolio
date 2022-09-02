import { atom } from "recoil";

export const maskState = atom({
  key: "maskState",
  default: { x: 0, y: 0 },
});
