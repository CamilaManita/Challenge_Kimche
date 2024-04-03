import { create } from "zustand";

export const useFilterStore = create((set) => ({
  gender: null,
  species: null,
  status: null,
  changeSpecies: (newSpecies) =>
    set(() => {
      return { species: newSpecies };
    }),
  changeGender: (newGender) =>
    set(() => {
      return { gender: newGender };
    }),
  changeStatus: (newStatus) =>
    set(() => {
      return { status: newStatus };
    }),
}));
