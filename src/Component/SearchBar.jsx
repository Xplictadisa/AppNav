export function SearchBar({filterText, setFilterText, inStockOnly, setInStockOnly}) {
  function onInputChange(e) {
    setFilterText(e.target.value)
  }

  return(
    <form action="">
      <input type="text" placeholder="Search" 
        value={filterText}
        onChange={onInputChange}/>
      <br/>
      <label htmlFor="">
        <input type="checkbox" name="" id="" checked={inStockOnly}
        onChange={() => {setInStockOnly(!inStockOnly)}}/>
        Only show products in stock
      </label>
    </form>
  )
}