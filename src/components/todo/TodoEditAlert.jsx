import Swal from "sweetalert2";
import store from "../../redux/store/store.js";
import {editTodo, removeTodo} from "../../redux/state/todo/todoSlice.js";

export function todoEditAlert(index,item){


    Swal.fire({
        title: "Update Task Name",
        input: 'text',
        inputValue: item,
        inputValidator:(value)=>{
            if(value){
                store.dispatch(editTodo({
                    index: index, task: value
                }))
            }
        }
    })

}