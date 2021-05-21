const Section = (props) => {
  return (
    <div className={`flex min-h-screen justify-center items-center ${props.color}`}>
      {props.children}
    </div>
  );
}

export default Section;