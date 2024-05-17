import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import AuthContextProvider from "./contexts/AuthContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </AuthContextProvider>
);
