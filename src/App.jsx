import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { minusOne, plusNumber, plusOne } from "./redux/modules/counter";

function App() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(0);
  const number = useSelector((state) => state.counter.number);

  return (
    <div
      style={{
        padding: "50px",
      }}
    >
      <label htmlFor="">더 하고 싶은 값을 입력하세요</label>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <div>{number}</div>
      <div>
        <button
          onClick={() => {
            dispatch(plusOne());
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            dispatch(minusOne());
          }}
        >
          -1
        </button>
        <button
          onClick={() => {
            dispatch(plusNumber(+inputValue));
          }}
        >
          입력한 숫자만큼 더하기
        </button>
      </div>
    </div>
  );
}

export default App;
