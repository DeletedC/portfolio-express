const Section = (props) => {
  return (
    <div className={`flex ${props.height || 'min-h-screen'} justify-center ${props.color}`}>
      {props.children}
    </div>
  );
}

export default Section;