import './WebVisitors.css'

function WebVisitors(props) {
  return(
    <div className='grid-item WebVisitors' >
      <h3>Website Visitors</h3>
      <h2>{props.visitorAmount}</h2>
      <p className='box'></p>
    </div>
  )
}

export default WebVisitors