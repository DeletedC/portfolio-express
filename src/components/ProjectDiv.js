const ProjectDiv = (props) => {
  return (
    <div className='flex'>
      
      {/* Project Name and Description */}
      <div>
        <h1>{props.name}</h1>
        <p>Built With:</p>

        {/* DevIcons will go here */}
        <div>
          
        </div>

      </div>

      {/* Project Images */}
      <div>
        <p>Image Placeholder</p>
      </div>
    </div>
  );
}

export default ProjectDiv;