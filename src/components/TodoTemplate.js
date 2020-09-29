// 투두 리스트의 레이아웃을 설정하는 컴포넌트
import React from 'react';
import './TodoTemplate.scss';

function TodoTemplate({children}) {
    return (
        <div className='TodoTemplate'>
            {children}
        </div>
    );
}

export default TodoTemplate;