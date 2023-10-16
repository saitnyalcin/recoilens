import React, { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";

const RecoilLogger = ({ value }: any) => {
  const currentValue = useRecoilValue(value);
  const previousValue = usePrevious(currentValue);

  useEffect(() => {
    console.log(
      `Current Value: ${currentValue}, Previous Value: ${previousValue}`
    );

    const popup = document.getElementById("popup") as any;

    if (popup) {
      popup.style = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #000;
        color: #fff;
        padding: 10px 20px;
        border-radius: 5px;
        opacity: 1;
        transition: opacity 0.3s ease;
      `;

      setTimeout(() => {
        popup.style.opacity = "0";
      }, 1000);
    }
  }, [currentValue, previousValue]);

  return <div id="popup">Check the console for state changes</div>;
};

function usePrevious(value: any) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export default RecoilLogger;
