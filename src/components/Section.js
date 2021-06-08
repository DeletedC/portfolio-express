const Section = (props) => {
  return (
    <div className={`flex min-h-screen h-auto justify-center ${props.color}`}>
      {props.children}
    </div>
  );
}

export default Section;