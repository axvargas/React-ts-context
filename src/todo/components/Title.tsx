import { useTodos } from "../hooks/useTodos"

const Title = () => {
  const {pending, completed} = useTodos()
  return (
    <>
      <h2>Pending: {pending}</h2>
      <h2>Completed: {completed}</h2>

      <h1>Todos: </h1>
    </>
  )
}

export default Title