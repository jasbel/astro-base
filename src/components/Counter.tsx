import { createSignal, type Component, type JSX } from "solid-js";

interface Props {
  initValue: number;
  children: JSX.Element
}

export const Counter: Component<Props> = (props) => {
  const [counter, setCounter] = createSignal(props.initValue || 0);
  return (
    <>
      {props.children}
      {/* <h1 class="text-4xl">Counter</h1> */}
      <h3 class="text-3xl">Value: {counter()}</h3>
      <button class="bg-blue-500 p-2 mr-2 rounded" onClick={() => setCounter(c => ++c)}>+1</button>
      <button class="bg-blue-500 p-2 mr-2 rounded" onClick={() => setCounter(c => --c)}>-1</button>
    </>
  );
};
