import {createElement} from "react";
import {createRoot} from "react-dom";
import App from "@/App";

const root = createRoot(document.querySelector("#root"));

root.render(createElement(App));
