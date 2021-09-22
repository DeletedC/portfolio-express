import svgPicker from "../pages/api/svgPicker";

const MobileLinksBar = () => {
    return (
        <div className="md:hidden bg-white h-20 fixed bottom-0 inset-x-0 border-t-2 border-gray-200">
          <div className="flex justify-center pt-4">
            <a className='flex justify-center' 
              href="https://www.linkedin.com/in/curtisjwoods" 
              target='_blank' rel="noreferrer">{svgPicker('linkedIn', ' ')}</a>
            <a className='flex justify-center' href="mailto: CurtisJWoodsII@gmail.com">{svgPicker('email', 'pt-1')}</a>
            <a className='flex justify-center' href="tel:724-777-8479">{svgPicker('phone', ' ')}</a>
            {/* Button for Resume */}
            <button className='bg-green-600 hover:bg-green-400 rounded-lg px-4 mx-4'
                onClick={() => window.open("./docs/Curtis Woods - GA Resume.pdf", "_blank", ['noopener', 'noreferrer'])}
              >Résumé</button> 
          </div>
          
        </div>
        
    );
  }
  
  export default MobileLinksBar;