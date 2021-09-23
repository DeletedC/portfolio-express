const DevIcon = (props) => {
  return (
    <div className={`${props.extra}`}>
      {props.children}
    </div>  
  );
}

export default DevIcon;