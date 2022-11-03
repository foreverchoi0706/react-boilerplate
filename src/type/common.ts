export type TFunction<R = void, A extends unknown[] = never> = (
  ...args: A
) => R;
