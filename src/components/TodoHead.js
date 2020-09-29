// 오늘 날짜와 요일을 표시하고 남은 할일 갯수 표시
import React from 'react';
import './TodoHead.scss';

function TodoHead() {
    return (
        <div className="TodoHead">
            <h1>9999년 9월 99일</h1>
            <div className="day">일요일</div>
            <div className="tasks-left">할 일 99개 남음</div>
        </div>
    );
}

export default TodoHead;