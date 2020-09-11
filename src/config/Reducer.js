const defaultState = [
  { id: 0, text: "Do Something" },
  { id: 1, text: "Keep Coding" },
  { id: 2, text: "You must go on" },
];

export default function reducer(state = defaultState, action) {
  let newState = [];
  switch (action.type) {
    case "ADD":
      let payload = action.payload;
      payload.id = state.length;
      return [...state, payload];
    case "DELETE":
      newState = JSON.parse(JSON.stringify(state));
      newState.splice(action.payload.id, 1);
      return newState;
    case "DONE":
      newState = JSON.parse(JSON.stringify(state));
      const item = newState[action.payload.id];
      item.done = !item.done;
      console.log("state", newState);
      return newState;
    default:
      return state;
  }
}
