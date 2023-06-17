import { useEffect, useState } from "react"
import { NewGroceryForm } from "./NewGroceryForm"
import "./styles.css"
import { GroceryList } from "./GroceryList"

export default function App() {
  const [groceries, setGroceries] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(groceries))
  }, [groceries])

  function addGrocery(title) {
    setGroceries(currentGroceries => {
      return [
        ...currentGroceries,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  function toggleGrocery(id, completed) {
    setGroceries(currentGroceries => {
      return currentGroceries.map(grocery => {
        if (grocery.id === id) {
          return { ...grocery, completed }
        }

        return grocery
      })
    })
  }

  function deleteGrocery(id) {
    setGroceries(currentGroceries => {
      return currentGroceries.filter(grocery => grocery.id !== id)
    })
  }

  return (
    <>
      <NewGroceryForm onSubmit={addGrocery} />
      <h1 className="header">Your shopping List: </h1>
      <GroceryList groceries={groceries} toggleGrocery={toggleGrocery} deleteGrocery={deleteGrocery} />
    </>
  )
}