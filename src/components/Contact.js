import svgPicker from "../pages/api/svgPicker";

const Contact = () => {
    return (
      <div>
        <h1 className='text-center p-6'>Contact</h1>

        {/* CONTACT LINKS */}
        <div className='hidden md:flex inline-flex h-28 md:pt-12'>
          <a className='flex justify-center' href="https://www.linkedin.com/in/curtisjwoods" target='_blank' rel='noreferrer'>{svgPicker('linkedIn', 'px-24')}</a>
          <a className='flex justify-center' href="mailto: CurtisJWoodsII@gmail.com">{svgPicker('email', 'px-24')}</a>
          <a className='flex justify-center' href="tel:724-777-8479">{svgPicker('phone', 'px-24')}</a>
        </div>
      </div>
    );
  }
  
  export default Contact;