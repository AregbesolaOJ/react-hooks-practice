import React, { useState } from 'react';

const Pagination = () => {
  const [state, setState] = useState({
    todos: ['a','b','c','d','e','f','g','h','i','j','k','a','b','c','d','e','f','g','h','i','j','k','a','b','c','d','e','f','g','h','i','j','k'],
    currentPage: 1,
    todosPerPage: 5
  });

  const { todos, currentPage, todosPerPage } = state;

  // Logic for displaying todos
  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  const renderTodos = currentTodos.map((todo, index) => {
    return <li key={index}>{todo}</li>;
  });

  // Logic for displaying page numbers
  let pageNumbers = [];
  if(currentPage === 1) {
    pageNumbers = [1, 2, 3];
  } else if(currentPage === Math.ceil(todos.length / todosPerPage)) {
    for (let i = currentPage - 2; i <= currentPage; i++) {
      pageNumbers.push(i);
    };      
  } else {
    for (let i = currentPage - 1; i <= currentPage + 1; i++) {
      pageNumbers.push(i);
    };
  }
  
  const handleClick = number => {
    setState({
      ...state,
      currentPage: number
    });
  };

  const renderPageNumbers = pageNumbers.map(number => {
    return (
      <li
        key={number}
        id={number}
        onClick={() => handleClick(number)}
      >
        {number}
      </li>
    );
  });

  return (
    <div className="pagination">
        <div>
            <ul>
                {renderTodos}
            </ul>
            <ul id="page-numbers">
                {renderPageNumbers}
            </ul>
        </div>
    </div>
  );
}

export default Pagination;