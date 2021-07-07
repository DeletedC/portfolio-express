const DevIcon = (props) => {
  return (
    <div className={`w-1/4 md:w-1/12 ${props.padding}`}>
      {props.children}
    </div>  
  );
}

export default DevIcon;