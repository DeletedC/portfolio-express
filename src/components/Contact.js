import svgPicker from "../pages/api/svgPicker";

const Contact = () => {
    return (
      <div>
        <h1 className='text-center p-6'>Contact</h1>

        {/* CONTACT LINKS */}
        <div className='flex justify-evenly'>
          {svgPicker('linkedIn')}
          {svgPicker('email')}
          {svgPicker('phone')}
        </div>
      </div>
    );
  }
  
  export default Contact;