import { GroceryItem } from "./GroceryItem"

export function GroceryList({ groceries, toggleGrocery, deleteGrocery }) {
  return (
    <ul className="list">
      {groceries.length === 0 && "No groceries, Add more "}
      {groceries.map(grocery => {
        return (
          <GroceryItem
            {...grocery}
            key={grocery.id}
            toggleGrocery={toggleGrocery}
            deleteGrocery={deleteGrocery}
          />
        )
      })}
    </ul>
  )
}