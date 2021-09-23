import svgPicker from '../pages/api/svgPicker';
import ButtonLinks from './ButtonLinks';
// import Image from 'next/image';

const ProjectDiv = (props) => {
  return (
    <div className={`flex flex-col items-center min-w-full py-12 pb-24 ${props.color}`}>

      {/* 
      ////////////////////////////
      DESKTOP CONTAINER 
      ///////////////////////////
      */}
      <div className={`hidden md:flex ${props.direction || 'flex-row'} px-12`}>
        
        {/* Project Name and Description */}
        <div className={`flex flex-col w-2/4 ${props.direction? 'items-end': 'items-start'}`}>
            <h1 className='pb-4'>{props.name}</h1>
            <p className='text-xl pb-2'>Built With:</p>

            {/* DevIcons will go here */}
            <div className={`inline-flex flex-nowrap space-x-2 w-1/2 ${props.direction? 'justify-end': 'justify-start'}`}>
            {props.tech.map((item) => {
                return <div className='bg-blue-100 bg-opacity-10 rounded w-16 h-16 p-2'>{svgPicker(item)}</div>
            })} 
            </div>

          {/* Project Description */}
          <div className={`flex flex-col ${props.direction? 'justify-end pl-20': 'justify-start pr-20'} text-2xl leading-relaxed py-12`}>
            {props.children}
          </div>
          
          {/* LINKS GO HERE */}
          <ButtonLinks data={props.links} />

        </div>

        {/* Project Images */}
        <img className='object-contain w-2/4 rounded-2xl' src={props.image} alt={`${props.name} Screenshot`}/>
        

      </div>

      

      {/* 
      ////////////////////////////
      MOBILE CONTAINER 
      ///////////////////////////
      */}
      <div className='md:hidden'>
        {/* Project Name and Description */}
        <div className=''>
          <h1 className='pb-4 text-center'>{props.name}</h1>

          {/* Project Images */}
          <img className='object-contain' src={props.image} alt={`${props.name} Screenshot`}/>
          
          {/* DevIcons will go here */}
          <div className={`inline-flex justify-center py-8 px-12`}>
          {props.tech.map((item) => {
              return svgPicker(item);
          })} 
          </div>

          {/* Project Description */}
          <div className={`text-2xl leading-relaxed py-4 px-6`}>
            {props.children}
          </div>

          {/* LINKS GO HERE */}
          <ButtonLinks data={props.links} />
        </div>


      </div>
    </div>
  );
}

export default ProjectDiv;