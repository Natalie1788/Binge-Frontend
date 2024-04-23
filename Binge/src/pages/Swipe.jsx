

import Navbar from '../components/Navbar'

const Swipe = () => {
  return (
    <>
      <Navbar />

      <SwipeCard />
    </>
  );
}

export default Swipe


const SwipeCard = () => {
return (
  <>
    <div className="h-8"></div>
    <div className="flex flex-col ">
      <h1 className="flex justify-center font-bold text-4xl mb-6 ">
        Swipa på maträtter
      </h1>

      <div className="flex justify-center items-center flex-col">
        <h3>
          {" "}
          Swipa höger för att favorisera en rätt, och spara den till din kokbok.
        </h3>
        <h3>Swipa vänster för att visa nästa rätt.</h3>
        <h3>
          Tryckte fel? Tryck på ↩ knappen för att gå tillbaka till din senaste
          rätt.
        </h3>
      </div>

      <section className="flex justify-center items-center h-screen">
        {" "}
        {/* Added flex and centering classes */}
        <div className="size-[30rem] border-solid border-black border-8 flex flex-col justify-end bg-white p-8 rounded-lg items-center justify-self-center self-center">
          <img />
          <div className="flex space-x-7  mb-4">
            <button className="text-3xl">↩</button>
            <button className="text-3xl">❌</button>
            <button className="text-3xl">🥘</button>
          </div>

          <h2 className="font-bold">Spaghet</h2>
        </div>
      </section>
    </div>
  </>
);

}