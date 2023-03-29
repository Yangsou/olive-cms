import { create } from 'zustand';

type GlobalStoreType = {
  isAuthenticated: boolean;
  loading: boolean;
  setAuthenticated: () => void;
  setLoading: (payload: boolean) => void;
  unAuthenticated: () => void;

  drawerOpen: boolean;
  toggleDrawerOpen: (payload: boolean) => void
}
const useGlobalStore = create<GlobalStoreType>((set) => ({
  isAuthenticated: false,
  loading: true,
  setAuthenticated: () => set({
    isAuthenticated: true,
    loading: false
  }),
  setLoading: (payload: boolean) => set({
    loading: payload
  }),
  unAuthenticated: () => set({
    isAuthenticated: false,
    loading: false
  }),

  drawerOpen: true,
  toggleDrawerOpen: (payload: boolean) => set({ drawerOpen: payload })
}))

export default useGlobalStore;