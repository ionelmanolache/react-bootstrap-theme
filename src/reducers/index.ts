const actions: Actions = {
  changename: (state: ActionState, { payload }: ActionData) => {
    return { ...state, name: payload.name } as ActionState;
  },
  changetheme: (state: ActionState, { payload }: ActionData) => {
    return { ...state, theme: payload.theme } as ActionState;
  },
  changevariant: (state: ActionState, { payload }: ActionData) => {
    return { ...state, variant: payload.variant } as ActionState;
  },
};

export const changeName = (value = "") => {
  return { type: "changename", payload: { name: value } } as ActionData;
};

export const changeTheme = (value = "light") => {
  return { type: "changetheme", payload: { theme: value } } as ActionData;
};

export const changeVariant = (value = "variant01") => {
  return { type: "changevariant", payload: { variant: value } } as ActionData;
};

export const appReducer = (state: ActionState, data: ActionData) => {
  const handler = actions[data.type];

  if (!handler) {
    throw new Error(`Unknown action '${data.type}'`);
  }

  return handler ? handler(state, data) : state;
};
