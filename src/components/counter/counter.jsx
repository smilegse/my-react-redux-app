import React, {useRef} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {increment,decrement,setCustom} from "../../redux/state/counter/counterSlice.js";


const Counter = () => {
    const myNumber = useRef();
    const count = useSelector((state)=> state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="container my-5">
            <div className="row d-flex justify-content-center">
                <div className="col-md-6 my-5">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="text-center">Counter App</h4>
                        </div>
                        <div className="card-body text-center">
                            <h1>{count}</h1>
                            <div className="my-4">
                                <button onClick={() => dispatch(increment())} className="btn btn-primary">Increase</button>
                                <button onClick={() => dispatch(decrement())} className="btn btn-danger mx-2">Decrease</button>
                            </div>
                            <div className="my-4">
                                <input ref={myNumber} className="form-control" type="number"  />
                                <button onClick={()=> dispatch(setCustom(myNumber.current.value))} className="btn btn-danger my-4">Set Custom Value</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;