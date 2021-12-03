import { db } from '../firebase/config'
import { doc, deleteDoc } from 'firebase/firestore'

export default function BookList({ todos }) {
  const handleClick = async (id) => {
    const ref = doc(db, 'todos', id)
    await deleteDoc(ref)
  }

  return (
    <div className='book-list'>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => handleClick(todo.id)}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  )
}
