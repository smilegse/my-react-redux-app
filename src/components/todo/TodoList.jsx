import React from 'react';

const TodoList = () => {
    return (
        <div className="container-fluid py-4">
            <div className="row">
                <div className="col-12">
                    <table className="table table-bordered table-striped">
                        <thead>
                        <tr>
                            <th>No</th>
                            <th>Task Name</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="col-1">No</td>
                            <td>Task Name</td>
                            <td className="col-1"><button className="btn btn-sm btn-primary">Edit</button></td>
                            <td className="col-1"><button className="btn btn-sm btn-danger">Delete</button></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TodoList;