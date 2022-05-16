import create, { SetState } from "zustand";

interface IUser {
    isAuthed: boolean;
    name: string;
    age: number;
    setIsAuthed: (isAuthed: boolean) => void;
    setName: (name: string) => void;
    setAge: (age: number) => void;
}

const store = (set: SetState<IUser>) => ({
    isAuthed: false,
    name: "",
    age: 0,
    setIsAuthed: (isAuthed: boolean) => set((state) => ({ ...state, isAuthed, })),
    setName: (name: string) => set((state) => ({ ...state, name, })),
    setAge: (age: number) => set((state) => ({ ...state, age, }))
})

const useUserStore = create<IUser>(store);

export default useUserStore;