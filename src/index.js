import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import configureStore from "./store/configureStore";
import { bugAdded, bugResolved, bugRemoved } from "./store/bugs";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = configureStore()

const unsubscribe = store.subscribe(() => {
  console.log("Store changed", store.getState());
});

//unsubscribe();

store.dispatch(bugAdded({description: "Bug 1"}));
store.dispatch(bugAdded({description: "Bug 2"}));
store.dispatch(bugAdded({description: "Bug 3"}));
store.dispatch(bugResolved({id: 2}));
store.dispatch(bugAdded({description: "Bug 4"}));
store.dispatch(bugResolved({id: 1}));
store.dispatch(bugRemoved({id: 3}));

//unsubscribe();

// store.dispatch({
//   type: actions.BUG_REMOVED,
//   payload: {
//     id: 1,
//   },
// });



root.render(
  <React.StrictMode>
    <App />
    {console.log(store.getState())}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
