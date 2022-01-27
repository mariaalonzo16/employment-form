import './TopNav.css';
import React from 'react';

export const TopNav = () => {
    const age = 23
    return ( 
        <>
            {age >= 23 ? (
                <h1>TopNav</h1>
                ) : (
                <h1>Maria</h1>
                ) 
            }
        </>
    );
}

// const age = 19   (= is the assignment operator)
// 5 == '5'  true (for the equality operator)
// 5 == 5  true (for the equality operator)
// 5 === '5' false (for the true equality operator)
// 5 === 5 true (for the true equality operator)
// 5 !== 5 false(for the non equlaity operator)
// 5 !== 6 true (for the non equlaity operator)
// ? means is whats to the left true?