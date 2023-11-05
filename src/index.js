"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const recoil_1 = require("recoil");
const RecoilLogger = ({ value }) => {
    const currentValue = (0, recoil_1.useRecoilValue)(value);
    const previousValue = usePrevious(currentValue);
    (0, react_1.useEffect)(() => {
        console.log("Current Value:", currentValue);
        console.log("Previous Value:", previousValue);
        const popup = document.getElementById("popup");
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
    return react_1.default.createElement("div", { id: "popup" }, "Check the console for state changes");
};
function usePrevious(value) {
    const ref = (0, react_1.useRef)();
    (0, react_1.useEffect)(() => {
        ref.current = value;
    }, [value]);
    return ref.current;
}
exports.default = RecoilLogger;
