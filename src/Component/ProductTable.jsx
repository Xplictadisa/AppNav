import { ProductCategoryRow } from "./ProductCategoryRow"
import { ProductRow } from "./ProductRow"

export function ProductTable({products, filterText, inStockOnly}) {
  const rows = []
  let lastProductCategory = null

  products.map((product) => {
    if (product.name.toLowerCase().indexOf(filterText) === -1 ) {
      return
    }

    if (inStockOnly && !product.stocked) {
      return
    }

    if (product.category !== lastProductCategory) {
      rows.push(
        <ProductCategoryRow category={product.category} key={product.category}/>
      )
    }

    rows.push(
      <ProductRow  product={product} key={product.name}/>
    )

    lastProductCategory = product.category
  })


  return(
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Price</td>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}