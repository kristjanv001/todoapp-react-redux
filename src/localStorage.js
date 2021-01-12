export const loadState = () => {
  // because it can fail if user does not allow it
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    } else {
      return JSON.parse(serializedState);
    }
  } catch (error) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (error) {
    console.log("error", error);
  }
};
