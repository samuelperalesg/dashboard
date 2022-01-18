import './Reviews.css'

function Reviews(props) {
  return(
    <div className='grid-item Reviews' >
      <h3>Reviews </h3>
      <h2>{props.reviewAmount}</h2>
    </div>
  )
}

export default Reviews