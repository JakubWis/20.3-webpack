import React from 'react';

const todo = (props) => {
	
	return (
	<p onClick={() => props.remove(props.number)}>{props.data.text}</p>
	);
	
};

export default todo;