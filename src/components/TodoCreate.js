// 새로운 할일을 등록하게 해주는 컴포넌트
import React, { useState } from 'react';
import './TodoCreate.scss';
import classNames from 'classnames';
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from '../TodoContext';

const Input = function({...rest}) {
    return (
        <input type="text" className="Input" {...rest} />
    );
}

function TodoCreate() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    const dispatch= useTodoDispatch();
    const nextId = useTodoNextId();

    const onToggle = () => setOpen(!open);
    const onChange = e => setValue(e.target.value);
    const onSubmit = e => {
        e.preventDefault(); // submit할시 자동으로 새로 고침 되는것 방지
        dispatch({
            type: 'CREATE',
            todo: {
                id: nextId.current,
                text: value,
                done: false
            }
        });
        setValue('');
        setOpen(false);
        nextId.current += 1;
    }

    return (
        <>
            {open && (
                <div className="InsertFormPositioner">
                    <form className="InsertForm" onSubmit={onSubmit}>
                        <Input 
                            autoFocus 
                            placeholder="할 일을 입력 후, Enter를 누르세요"
                            onChange={onChange}
                            value={value}
                        />
                    </form>
                </div>
            )}
            <button className={classNames("CircleButton", {open})} onClick={onToggle}>
                <MdAdd />
            </button>
        </>
    );
}

export default React.memo(TodoCreate);