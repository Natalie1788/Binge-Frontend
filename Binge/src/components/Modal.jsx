/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Modal = ({ open, onClose }) => {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <ModalContent open={open} onClose={onClose} />
    </div>
  );
};

export default Modal;

const ModalContent = ({ onClose }) => {
  return (
    <div
      className={`bg-white rounded-xl  shadow p-6 max-w-screen-lg  
    `}
      onClick={(e) => e.stopPropagation()}
    >
      <h1 className="text-2xl font-bold text-emerald-800 text-center"> Du har gillat ett recept!</h1>
      <p className="py-8 text-center max-w-screen-sm">
        Fantastiskt val! 🎉
        <br/> Du har precis lagt till detta recept i din kokbok.
        Fortsätt svepa för flera recept eller gå till ditt nya recept i din
        kokbok.
      </p>
      <div className="flex justify-center gap-4">


      <button className="bg-emerald-800 text-white rounded-md p-2" onClick={onClose}>Fortsätt Svepa</button>
      <button className="border-2 border-black text-black rounded-md p-2"> <Link to="../cookbook">Till din Kokbok</Link></button>
      </div>
    </div>
  );
};
