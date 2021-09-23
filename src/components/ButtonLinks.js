const ButtonLinks = (props) => {
  return (
    <div className="flex flex-col items-center md:inline-flex md:flex-row">
      {props.data.liveSite? 
      // LIVE SITE BUTTON
      <div className='pb-4 md:p-0'>
        <button className="bg-green-300 md:transform hover:scale-110 active:bg-green-600 text-gray-800 font-bold py-2 px-4 md:px-10 mr-4 rounded"
        onClick={() => window.open(props.data.liveSite, "_blank", ['noopener', 'noreferrer'])}>
          Live Site
        </button>
      </div>
      : ''
      }

      <div className='m-auto inline-flex'>
      {props.data.repo.frontEnd && !props.data.repo.backEnd?
      // FRONT END REPO BUTTON --- Front end without a back end
        <button className="bg-gray-300 md:transform hover:scale-110 hover:bg-gray-400 active:bg-gray-500 text-gray-800 font-bold py-2 px-10 mr-4 rounded"
        onClick={() => window.open(props.data.repo.frontEnd, "_blank", ['noopener', 'noreferrer'])}>
          Repo
        </button>
      : props.data.repo.frontEnd && props.data.repo.backEnd?

      // FRONT AND BACK END REPO BUTTONS
      <div>
        {/* FRONT */}
        <button className="bg-gray-300 md:transform hover:scale-110 hover:bg-gray-400 active:bg-gray-500  text-gray-800 font-bold py-2 px-4 md:px-10 mr-4 rounded"
        onClick={() => window.open(props.data.repo.frontEnd, "_blank", ['noopener', 'noreferrer'])}>
          Front End Repo
        </button>

        {/* BACK */}
        <button className="bg-gray-300 md:transform hover:scale-110 hover:bg-gray-400 active:bg-gray-500  text-gray-800 font-bold py-2 px-4 md:px-10 mr-4 rounded"
        onClick={() => window.open(props.data.repo.backEnd, "_blank", ['noopener', 'noreferrer'])}>
          Back End Repo
        </button>
      </div>

      : ''
      }
      </div>
    </div>
  );
    
}

export default ButtonLinks;