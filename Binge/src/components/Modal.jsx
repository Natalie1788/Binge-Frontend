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
      <h1 className="text-2xl font-bold text-emerald-800 text-center"> You liked a Recipe!</h1>
      <p className="py-8 text-center max-w-screen-sm">
        Great choice! 🎉
        <br/> You have just added this recipe to your cookbook.
        Continue swiping for more recipes or go to your
        cookbook.
      </p>
      <div className="flex justify-center gap-4">


      <button className="bg-emerald-800 text-white rounded-md p-2" onClick={onClose}>Keep Swiping</button>
      <button className="border-2 border-black text-black rounded-md p-2"> <Link to="../cookbook">Your Cookbook</Link></button>
      </div>
    </div>
  );
};
