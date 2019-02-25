import React from 'react';

import styles from './TodoList.css';
import Todo from './Todo';

const todoList = (props) => {
	let tasks = props.data.map(data => {
		console.log(data.text);
		return <Todo data={data} key={data.id} remove={props.remove} number={data.id}/>
	});

	return (
	<div className={styles.TodoList}>
		{tasks}
	</div>
	);
	
};

export default todoList;