import svgPicker from "../pages/api/svgPicker";

const MobileLinksBar = () => {
    return (
        <div className="md:hidden bg-white h-18 fixed bottom-0 inset-x-0 border-t-2 border-gray-200 z-50">
          <div className="flex justify-center py-4">
            <a className='' 
              href="https://www.linkedin.com/in/curtisjwoods" 
              target='_blank' rel="noreferrer">{svgPicker('linkedIn', 'px-4')}</a>
            <a className='' href="mailto: CurtisJWoodsII@gmail.com">{svgPicker('email', 'px-4 pt-1')}</a>
            <a className='' href="tel:724-777-8479">{svgPicker('phone', 'px-4')}</a>
            {/* Button for Resume */}
            <button className='bg-green-600 hover:bg-green-400 rounded-lg px-4 mx-4'
                onClick={() => window.open("./docs/Curtis Woods - GA Resume.pdf", "_blank", ['noopener', 'noreferrer'])}
              >Résumé</button> 
          </div>
          
        </div>
        
    );
  }
  
  export default MobileLinksBar;