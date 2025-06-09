import { useState } from "react"
import { sculptureList } from "../../Data/data"

export function Gallery() {
  const [index, setIndex] = useState(0)
  const [showMore, setShowMore] = useState(false)
  const handleNextClick = () => {
    index < sculptureList.length - 1
      ? setIndex(index + 1)
      : setIndex(0)
  }
  const handleShowMore = () => {setShowMore(!showMore)}
  const sculpture = sculptureList[index]

  return(
    <div>
      <button onClick={handleNextClick}>Next</button>
      <p><i>{sculpture.name}</i> by {sculpture.artist}</p>
      <h5>{index + 1} of {sculptureList.length}</h5>
      <button onClick={handleShowMore}>{showMore ? 'hide' : 'Show'} details</button>
      <p>{showMore && sculpture.description}</p>
      <img src={sculpture.url} alt={sculpture.alt} />
    </div>
  )
}