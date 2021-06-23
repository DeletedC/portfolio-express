import svgPicker from '../js/svgPicker';

const Skills = () => {
  return (
    <div className=''>
      <h1 className='text-center p-6'>Skills</h1>

      {/* Icons Container */}
      <div className='flex flex-wrap min-h-full py-6'>

        {/* First Row */}
        <div className='flex justify-evenly'>
          
          {/* JavaScript */}
          {svgPicker('javascript')}

          {/* React */}
          {svgPicker('react')}

          {/* Node */}
          {svgPicker('node')}

        </div>
        {/* First Row End */}

        {/* Second Row */}
        <div className='flex justify-evenly'>
          {/* Express */}
          {svgPicker('express')}

          {/* Git */}
          {svgPicker('git')}

          {/* Linux */}
          {svgPicker('linux')}
        </div>
        {/* Second Row End */}

        {/* Third Row */}
        <div className='flex justify-evenly'>
          {/* MongoDB */}
          {svgPicker('mongoDB')}
          
          {/* Python */}
          {svgPicker('python')}

          {/* PostgreSQL */}
          {svgPicker('postgres')}
        </div>
        {/* Third Row End */}

      </div>
    </div>
  );
}

export default Skills;