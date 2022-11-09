export type TFunction<A extends unknown[] = never, R = void> = (
  ...args: A
) => R;
