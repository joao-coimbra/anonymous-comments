import { useState } from 'react';
import './App.css';

function App() {
  const [posts, setPost] = useState([{ id: 1, title:'First post', date:new Date()}])
  const [value, setValue] = useState('');
  const [errorAlert, setErrorAlert] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  }

  const addValue = () => {
    setPost(
      [
        ...posts,
        {id: posts.length+1, title: value, date: new Date()}
      ]
    );
    setValue('');
    setErrorAlert('');
  }

  const handleClick = () => {
    value ? addValue() : setErrorAlert('Post vazio.')
  }

  return (
    <div className='App'>
      <div>
      <table>
        <tr>
          <th>ID</th>
          <th>Post</th>
          <th>Data</th>
        </tr>
        {posts.map(post => <Post key={post.id} id={post.id} title={post.title} date={post.date} />)}
      </table>
      <div>
      <input
        type='text'
        value={value}
        onChange={handleChange}
        required
      />
      <button onClick={handleClick}>Click</button>
      </div>
      <span>{errorAlert}</span>
      </div>
    </div>
  );
}

function Post(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.title}</td>
      <td>{props.date.toLocaleString('pt-br')}</td>
    </tr>
  )
}

export default App;