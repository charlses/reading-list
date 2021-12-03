import { useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'

import { db } from '../firebase/config'
import { collection, addDoc } from 'firebase/firestore'

export default function BookForm() {
  const [newTodo, setNewTodo] = useState('')
  const { user } = useAuthContext()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const ref = collection(db, 'todos')

    await addDoc(ref, {
      title: newTodo,
      uid: user.uid
    })

    setNewTodo('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Add a new todo</span>
        <input
          required
          type='text'
          onChange={(e) => setNewTodo(e.target.value)}
          value={newTodo}
        />
      </label>
      <button>Add</button>
    </form>
  )
}
