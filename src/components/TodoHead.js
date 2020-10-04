// 오늘 날짜와 요일을 표시하고 남은 할일 갯수 표시
import React from 'react';
import './TodoHead.scss';

import { useTodoState } from '../TodoContext';

function TodoHead() {
    const todos = useTodoState();
    // undoneTasks에 todo.done 이 false 인 것만 넣어줌
    const undoneTasks = todos.filter(todo => !todo.done);

    // 날짜 표시를 위한 작업
    const today = new Date(); // 오늘 날짜와 시간정보(now)

    // console.log(today); // EX) Sun Oct 04 2020 11:56:00 GMT+0900 (대한민국 표준시)
    // console.log(today.toLocaleString()); // EX) 2020. 10. 4. 오전 11:56:00
    // console.log(today.toLocaleString('ko-KR', { weekday: 'long' })); // 요일
    // console.log(today.toLocaleDateString()); // 년월일 string EX) 2020. 10. 4.
    // console.log(today.toLocaleDateString('ko-KR', { weekday: 'long' })); // 요일
    // console.log(today.toLocaleTimeString()); // 시간 string EX) 오후 12:15:28

    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });

    return (
        <div className="TodoHead">
            <h1>{dateString}</h1>
            <div className="day">{dayName}</div>
            <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
        </div>
    );
}

export default TodoHead;