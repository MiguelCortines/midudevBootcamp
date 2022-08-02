const MensajeProp = (props) => {
    return (
      <div>
        <h3 style = {{color: props.color}}>{props.message}</h3>
      </div>
    )
}

export default MensajeProp