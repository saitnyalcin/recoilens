# Recoilens Recoil Logger Library - RRLL

The Recoilens provides a custom state logger for Recoil, a state management library for React. It allows you to track changes in a specific atom and display a message as a popup.

## Installation

To install the Recoil Logger Library, use npm or yarn:

```bash
npm install recoilens
# or
yarn add recoilens
```

## Usage

### 1. Import the Library

```jsx
import RecoilLogger from "recoilens";
```

### 2. Wrap your Application in `RecoilRoot`

Wrap your application with `RecoilRoot` to provide the Recoil state context:

```jsx
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <RecoilRoot>
      <RecoilLogger value={myAtom} />
      {/* Other components */}
    </RecoilRoot>
  );
};

export default App;
```

### 3. Add Atom and Controls

Define your Recoil atom and add controls to interact with it:

```jsx
import { useRecoilState, atom } from "recoil";

export const myAtom = atom({
  key: "myAtom",
  default: 0,
});

const ButtonControls = () => {
  const [currentValue, setCurrentValue] = useRecoilState(myAtom);

  const increaseValue = () => {
    setCurrentValue((prevValue) => prevValue + 1);
  };

  const decreaseValue = () => {
    setCurrentValue((prevValue) => prevValue - 1);
  };

  return (
    <div>
      <button onClick={increaseValue}>Increase Value</button>
      <button onClick={decreaseValue}>Decrease Value</button>
      <div>Current Value: {currentValue}</div>
    </div>
  );
};
```

### 4. Run Your Application

Start your application to see the Recoil Logger in action.

## License

This library is released under the [MIT License](LICENSE).
