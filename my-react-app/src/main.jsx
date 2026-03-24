import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Amplify } from "aws-amplify";
import awsConfig from "./aws-exports";


Amplify.configure(awsConfig);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
