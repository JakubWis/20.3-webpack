import React, { Component } from 'react';

import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [{
				id: 1,
				    text: 'clean room'
				}, {
				id: 2,
				    text: 'wash the dishes'
				}, {
				id: 3,
				    text: 'feed my cat'
			}],
			howMany: 0
		};
	}

	addTodo(val) {
		const todo = {
			text: val,
			id: uuid.v4()
		};
		const data = [...this.state.data, todo];
		this.setState({data});
	}

	removeTodo(id) {
		const remainder = this.state.data.filter(todo => todo.id !== id);
		this.setState({data: remainder});
	}

	howManyTodo () {
		this.setState({howMany: this.state.data.length})
	}

	componentDidMount () {
		this.howManyTodo();
	}

	render() {
		return (
			<div className={style.TodoApp}>
				<Title howMany={this.state.howMany}/>
				<TodoList 
				data={this.state.data}
				remove={this.removeTodo}/>
			</div>
		);
	}
}

export default App;