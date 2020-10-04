import React, { useReducer, createContext, useContext, useRef } from 'react';

const initialTodos = [
    {
        id: 1,
        text: '프로젝트 생성하기',
        done: true
    },
    {
        id: 2,
        text: '컴포넌트 스타일링하기',
        done: true
    },
    {
        id: 3,
        text: 'Context 만들기',
        done: false
    },
    {
        id: 4,
        text: '기능 구현하기',
        done: false
    },
];

function todoReducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(todo => 
                todo.id === action.id ? { ...todo, done: !todo.done } : todo    
            );
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

// state 와 dispatch 를 사용할 수 있는 각각의 Context를 만들어줌
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();

// 새로운 항목을 추가할때 사용할 고유 ID
const TodoNextIdContext = createContext();

// 다음 ID 값
const NEXT_ID_NUMBER = initialTodos.length + 1;

export function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(todoReducer, initialTodos);

    const nextId = useRef(NEXT_ID_NUMBER);

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

// 다른곳에서 useContext 를 사용하지 않고 다른 곳에서 사용할 수 있게
// Custom Hook 두개 생성
export function useTodoState() {
    const context = useContext(TodoStateContext);
    if(!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context
}
export function useTodoDispatch() {
    const context = useContext(TodoDispatchContext);
    if(!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}
// 위에 처럼 nextId에 접근할 수 있는 Custom Hook 생성
export function useTodoNextId() {
    const context = useContext(TodoNextIdContext);
    if(!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}