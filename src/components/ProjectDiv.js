import svgPicker from '../js/svgPicker'


const ProjectDiv = (props) => {
  return (
    <div className='flex flex-col items-center min-w-full px-12'>
      <div className='flex flex-row'>
        {/* Project Name and Description */}
        <div className='w-2/4'>
            <h1>{props.name}</h1>
            <p>Built With:</p>

            {/* DevIcons will go here */}
            <div className='flex flex-row flex-nowrap'>
            {props.tech.map((item) => {
                return svgPicker(item);
            })} 
            </div>

        </div>

        {/* Project Images */}
        <div className='w-2/4'>
            <p>Image Placeholder</p>
        </div>
      </div>
      {/* Project Description */}
      <div className='flex justify-center'>
        {props.children}
      </div>
    </div>
  );
}

export default ProjectDiv;