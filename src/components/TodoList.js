// 할일에 대한 정보가 들어있는 컴포넌트 여러개의 TodoItem을 여기서 렌더링
import React from 'react';
import './TodoList.scss';
import TodoItem from './TodoItem';
import { useTodoState } from '../TodoContext';

function TodoList() {
    const todos = useTodoState();

    return (
        <div className="TodoList">
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    done={todo.done}
                />
            ))}
        </div>
    );
}

export default TodoList;