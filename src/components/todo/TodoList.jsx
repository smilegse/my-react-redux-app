import React from 'react';
import {useSelector} from "react-redux";
import {deleteTodoAlert} from "./DeleteTodoAlert.js";
import {todoEditAlert} from "./TodoEditAlert.jsx";

const TodoList = () => {
const todoItems = useSelector((state)=>state.todo.value)


    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-12">
                    <table className="table table-bordered table-striped">
                        <thead>
                        <tr>
                            <th>No</th>
                            <th>Task Name</th>
                            <th className="text-center col-md-1">Edit</th>
                            <th className="text-center col-md-1">Delete</th>
                        </tr>
                        </thead>
                        <tbody>

                        {
                            todoItems.map((item,index)=>{
                                return (
                                    <tr key={index}>
                                        <td className="col-1">{index}</td>
                                        <td>{item}</td>
                                        <td className="text-center">
                                            <button onClick={()=> {todoEditAlert(index,item)}} className="btn btn-sm btn-success">
                                                <i className="bi bi-pencil-square"></i> Edit
                                            </button>
                                        </td>
                                        <td className="text-center">
                                            <button onClick={()=>{deleteTodoAlert(index)}} className="btn btn-sm btn-danger">
                                                <i className="bi bi-trash3"></i> Delete
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TodoList;