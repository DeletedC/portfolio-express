import svgPicker from "../pages/api/svgPicker";

const Contact = () => {
    return (
      <div>
        <h1 className='text-center p-6'>Contact</h1>

        {/* CONTACT LINKS */}
        <div className='inline-flex md:pt-12'>
          <a className='flex justify-center' href="https://www.linkedin.com/in/curtisjwoods" target='_blank' rel='noreferrer'>{svgPicker('linkedIn')}</a>
          <a className='flex justify-center' href="mailto: CurtisJWoodsII@gmail.com">{svgPicker('email')}</a>
          <a className='flex justify-center' href="tel:724-777-8479">{svgPicker('phone')}</a>
        </div>
      </div>
    );
  }
  
  export default Contact;