import { useContext } from "react";
import { createContext } from "react";

export const Todocontext = createContext({
    todos : [
        {
            id: 1,
            title: "Todo 1",
            completed: false
        },
    ],
    addtodo : (title)=>{},
    updatetodo : (id,title)=>{},
    deletetodo : (id)=>{},
    toggleComplete : (id)=>{},
});

export const useTodo = () => {
    return useContext(Todocontext);
}

export const TodoProvider = Todocontext.Provider

