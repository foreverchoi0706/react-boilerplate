const createAction =
  <T>(type: string) =>
  (payload: T) => ({
    type,
    payload,
  });

export default createAction;
