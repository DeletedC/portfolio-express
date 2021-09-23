import svgPicker from '../pages/api/svgPicker';

const Skills = () => {
  return (
    <div className=''>
      <h1 className='text-center p-6'>Skills</h1>

      {/* Icons Container */}
      <div className='px-4 md:pb-10'>
        <table className='md:min-h-screen'>
          <tbody>
            <tr>
              <td>{svgPicker('javascript', 'px-2 md:px-10')}</td>
              <td>{svgPicker('react', 'px-2 pb-4 md:px-10')}</td>
              <td>{svgPicker('html', 'px-2 pb-4 md:px-10')}</td>
              <td>{svgPicker('css', 'px-2 pb-4 md:px-10')}</td>
            </tr>
            <tr>
              <td>{svgPicker('node', 'px-2 pb-4 md:px-10')}</td>
              <td>{svgPicker('express', 'px-2 pb-4 md:px-10')}</td>
              <td>{svgPicker('mongoDB', 'px-2 pb-4 md:px-10')}</td>
              <td>{svgPicker('git', 'px-2 pb-4 md:px-10')}</td>
            </tr>
            <tr>
              <td>{svgPicker('heroku', 'px-2 pb-4 md:px-10')}</td>
              <td>{svgPicker('netlify', 'px-2 pb-4 md:px-10')}</td>
              <td>{svgPicker('python', 'px-2 pb-4 md:px-10')}</td>
              <td>{svgPicker('postgres', 'px-2 pb-4 md:px-10')}</td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </div>
  );
}

export default Skills;