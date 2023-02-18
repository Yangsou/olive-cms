import { create } from 'zustand';

type GlobalStoreType = {
  isAuthenticated: boolean;
  setAuthenticated: () => void
}
const useGlobalStore = create<GlobalStoreType>((set) => ({
  isAuthenticated: false,
  setAuthenticated: () => set({
    isAuthenticated: true
  })
}))

export default useGlobalStore;