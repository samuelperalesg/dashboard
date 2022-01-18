import './AvgRating.css'

function AvgRating(props) {
  return(
    <div className='grid-item avgRating' >
      <h3>Average Rating</h3>
      <h2>{props.avgRating}</h2>
    </div>
  )
}

export default AvgRating