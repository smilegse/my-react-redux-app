import React, {useRef} from 'react';
import {useDispatch} from 'react-redux';
import {addTodo} from "../../redux/state/todo/todoSlice";

const CreateTodo = () => {
    const taskInput = useRef(null);
    const dispatch = useDispatch();

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-10">
                    <input ref={taskInput} placeholder="Task Name" type="text" className="form-control" required/>
                </div>
                <div className="col-md-2">
                    <button onClick={()=> dispatch(addTodo(taskInput.current.value))} className="btn btn-primary">ADD TO DO</button>
                </div>
            </div>
        </div>
    );
};

export default CreateTodo;