import React from 'react';
import CreateTodo from "../components/todo/CreateTodo.jsx";
import TodoList from "../components/todo/TodoList.jsx";
import Layout from "../components/layout/layout.jsx";

const TodoPage = () => {
    return (
        <Layout>
            <div className="container my-5">
                <div className="row">
                    <div className="col-12 my-5">
                        <div className="card">
                            <div className="card-header">
                                <h4>Todo App</h4>
                            </div>
                            <div className="card-body">
                                <CreateTodo/>
                                <TodoList/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default TodoPage;

