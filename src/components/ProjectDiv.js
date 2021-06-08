import DevIcon from "./DevIcon";
import svgPicker from '../js/svgPicker'
import { ReactComponent as JsSVG} from '../img/svg/javascript.svg';

const ProjectDiv = (props) => {
  return (
    <div className='flex'>
      
      {/* Project Name and Description */}
      <div>
        <h1>{props.name}</h1>
        <p>Built With:</p>

        {/* DevIcons will go here */}
        <div>
          {props.tech.map((item) => {
            switch (item) {
              case "javascript":
                return (
                  <DevIcon>
                      <JsSVG />
                  </DevIcon>
                );
            //   case "react":
            //     return objSVG.react;
            //   case "node":
            //     return objSVG.node;
            //   case "express":
            //     return objSVG.express;
            //   case "git":
            //     return objSVG.git;
            //   case "linux":
            //     return objSVG.linux;
            //   case "mongoDB":
            //     return objSVG.mongoDB;
            //   case "python":
            //     return objSVG.python;
            //   case "postgres":
            //     return objSVG.postgres;
              default:
                break;
            }
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