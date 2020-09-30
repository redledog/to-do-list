// 각 할일에 대한 정보를 보여주는 컴포넌트, 할일 완료 여부를 체크하거나 제거할 수 있는 기능이 있음
import React from 'react';
import './TodoItem.scss';
import { MdDone, MdDelete } from 'react-icons/md';
import classNames from 'classnames';

function TodoItem({ id, done, text }) {
    return (
        <div className="TodoItem">
            <div className={classNames("CheckCircle", {done})}>{done && <MdDone />}</div>
            <div className={classNames("Text", {done})}>{text}</div>
            <div className="Remove">
                <MdDelete />
            </div>
        </div>
    );
}

export default TodoItem;