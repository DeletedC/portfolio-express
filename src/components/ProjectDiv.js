import DevIcon from "./DevIcon";
import svgPicker from '../js/svgPicker'

const ProjectDiv = (props) => {
  return (
    <div className='flex'>
      
      {/* Project Name and Description */}
      <div>
        <h1>{props.name}</h1>
        <p>Built With:</p>

        {/* DevIcons will go here */}
        <div>
          {props.tech.forEach((item) => {
            <DevIcon>
              {svgPicker(item)}
            </DevIcon>
          })}
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