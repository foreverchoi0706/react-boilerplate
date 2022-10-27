export const INITIAL_HISTORY = { title: "", contents: "" };

export type THistory = typeof INITIAL_HISTORY;

export interface ISigInForm {
  id: string;
  password: string;
  date: string;
  histories: typeof INITIAL_HISTORY[];
}
