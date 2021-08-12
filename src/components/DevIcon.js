const DevIcon = (props) => {
  return (
    <div className={`w-1/4 ${props.extra || 'md:w-1/12'}`}>
      {props.children}
    </div>  
  );
}

export default DevIcon;