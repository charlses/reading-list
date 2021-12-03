import BookList from '../components/BookList'
import BookForm from '../components/BookForm'
import { useAuthContext } from '../hooks/useAuthContext'

import { useCollection } from '../hooks/useCollelction'

export default function Home() {
  const { user } = useAuthContext()
  const { documents: todos } = useCollection('todos', ['uid', '==', user.uid])
  return (
    <div className='App'>
      {todos && <BookList todos={todos} />}
      <BookForm />
    </div>
  )
}
