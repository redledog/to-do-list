// 할일에 대한 정보가 들어있는 컴포넌트 여러개의 TodoItem을 여기서 렌더링
import React from 'react';
import './TodoList.scss';
import TodoItem from './TodoItem';

function TodoList() {
    return (
        <div className="TodoList">
            <TodoItem text="할일1" done={true} />
            <TodoItem text="할일2" done={true} />
            <TodoItem text="할일3" done={false} />
            <TodoItem text="할일4" done={false} />
        </div>
    );
}

export default TodoList;