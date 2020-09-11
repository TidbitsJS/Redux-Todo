import { DELETE, ADD, DONE } from "./Action";
import { data } from "../components/Data";

const defaultState = data;

export default function reducer(state = defaultState, action) {
  console.log({ state, action });
}
