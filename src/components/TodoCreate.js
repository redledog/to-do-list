// 새로운 할일을 등록하게 해주는 컴포넌트
import React, { useState } from 'react';
import './TodoCreate.scss';
import classNames from 'classnames';
import { MdAdd } from 'react-icons/md';

const Input = function({...rest}) {
    return (
        <input type="text" className="Input" {...rest} />
    );
}

function TodoCreate() {
    const [open, setOpen] = useState(false);
    const onToggle = () => setOpen(!open);

    return (
        <>
            {open && (
                <div className="InsertFormPositioner">
                    <form className="InsertForm">
                        <Input autoFocus placeholder="할 일을 입력 후, Enter를 누르세요"/>
                    </form>
                </div>
            )}
            <button className={classNames("CircleButton", {open})} onClick={onToggle}>
                <MdAdd />
            </button>
        </>
    );
}

export default TodoCreate;