import {create} from 'zustand';

type GlobalStoreType = {
  isAuthenticated: boolean
}
const useGlobalStore = create<GlobalStoreType>((get) => ({
  isAuthenticated: true
}))

export default useGlobalStore;