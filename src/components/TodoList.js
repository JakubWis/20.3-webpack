import React from 'react';

import styles from './TodoList.css';

const todoList = (props) => {
	let tasks = props.data.map(data => {
		console.log(data.text);
		return <p key={data.id}>{data.text}</p>
	});

	return (
	<div className={styles.TodoList}>
		{tasks}
	</div>
	);
	
};

export default todoList;