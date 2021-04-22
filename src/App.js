import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, isLoggin, isLoggedOut } from "./actions";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);

  return (
    <div className="App">
      <div className="container padding-20">
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <h1 className="text-light"> Counter {counter}</h1>
            <button
              className="btn btn-primary "
              onClick={() => dispatch(increment())}
            >
              +
            </button>
            <button
              className="btn btn-danger "
              onClick={() => dispatch(decrement())}
            >
              -
            </button>
          </div>
          <div className="col-md-6 col-xs-12">
            {isLogged ? (
              <>
                <h3 className="text-light">User Active</h3>
                <button
                  className="btn btn-warning"
                  onClick={() => dispatch(isLoggedOut())}
                >
                  In active user
                </button>
              </>
            ) : (
              <>
                <h3 className="text-light">User is in active</h3>
                <button
                  className="btn btn-success"
                  onClick={() => dispatch(isLoggin())}
                >
                  Active user
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
