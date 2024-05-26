
import Navbar from '../components/Navbar'
import '/src/styles/Cookbook.css'


const Cookbook = () => {
    return (
      <>
        <Navbar />
        
        <div className="flex flex-col p-5 bg-gray-300 border-b border-solid border-black">
          <div className="flex bg-white border border-solid border-black dark:bg-gray-900 dark:text-white">
            <p>Binge Searchbar</p>
          </div>
          <div className="flex">
            <div className="bg-white p-5 my-10 border border-solid border-black">
              <p>Smakprofil</p>
              <p>Svepa</p>
              <p>Kokbok</p>
            </div>
            <div className="flex-1 my-10">
              <h1 className="flex justify-around">
                Din kokbok - Sparade recept
              </h1>
              <div className="flex items-center justify-center">
                <div className="mr-5 p-5 bg-white border border-solid border-black">
                  Bild på rätt
                </div>
                <div className=" p-5 bg-white border border-solid border-black">
                  Bild på rätt
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );

}

export default Cookbook