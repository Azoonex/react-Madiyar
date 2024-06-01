import React, { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            return state;
    }
}

function Button() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <div>
            <button onClick={() => dispatch({ type: 'increment' })} style={{ background: "blue", fontSize: '50px', display: "block", color: "#fff" }}>+</button>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type: 'decrement' })} style={{ background: "red", fontSize: '50px', display: "block", color: "#fff" }}>-</button>
        </div>
    );
}

export default Button



// state dispatch => Initial value Initial value => 0 userreducer (reducer,{count => intial state : 0} dispatch => function ochnage how intial state )
// so calling for reducer (state, action){ switch (action.type){case :'increment' : return {count : state.count + 1}; case 'decment' : return {count : state.count + 1}}}