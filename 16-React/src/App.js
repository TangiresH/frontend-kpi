import React, {useState} from "react";

const initialTodoState = [
    {"title":"adipisci nihil cumque","status":false,"done":true,"id":"1"},
    {"title":"ratione doloribus mollitia","status":false,"done":false,"id":"2"},
    {"title":"voluptatum sit voluptatibus","status":false,"done":true,"id":"3"},
    {"title":"sequi commodi voluptatibus","status":true,"done":false,"id":"4"},
    {"title":"minus quisquam nihil","status":true,"done":true,"id":"5"},
    {"title":"repellat itaque quasi","status":false,"done":false,"id":"6"},
    {"title":"nihil sit vitae","status":true,"done":true,"id":"7"},
    {"title":"voluptas quam alias","status":false,"done":true,"id":"8"},
    {"title":"sequi possimus culpa","status":true,"done":false,"id":"9"},
    {"title":"enim porro vero","status":false,"done":true,"id":"10"},
    {"title":"nulla inventore eaque","status":true,"done":false,"id":"11"},
    {"title":"molestias possimus labore","status":true,"done":false,"id":"12"},
    {"title":"corporis quia cum","status":true,"done":false,"id":"13"},
];


function App() {
    const [list, setList] = useState(initialTodoState);
    const todoList = list.map(todo => <li>{todo.title}</li>);
    let title;

  return (
      <React.Fragment>
        <form onSubmit={onSubmit}>
            <label htmlFor='title'>Title </label>
            <input type='title' id='title' onChange={onTitleClick}/>
        </form>
        <ul>
          {todoList}
        </ul>
      </React.Fragment>
  );


  function onTitleClick(e) {
      title = e.target.value;
  }

  function onSubmit(e) {
      e.preventDefault();

      let todo = {
          title: title,
          id: '13',
      };

      setList([...list, todo]);
  }
}

export default App;
