import { SearchBar } from "./SearchBar"
import { ProductTable } from "./ProductTable"
import { useState } from "react"

export function FilterableProductTable({products}) {
 const [filterText, setFilterText] = useState('')
 const [inStockOnly, setInStockOnly] = useState(false)

  return(
    <>
      <SearchBar filterText={filterText} setFilterText={setFilterText}
       inStockOnly={inStockOnly} setInStockOnly={setInStockOnly}/>
      <ProductTable products={products} 
        filterText={filterText}
        inStockOnly={inStockOnly}/>
    </>
  )
}