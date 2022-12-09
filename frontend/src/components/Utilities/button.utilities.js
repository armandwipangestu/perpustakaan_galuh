import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const handleIcon = (icon) => {
  switch (icon) {
    case "faPlus":
      return faPlus;
    case "faPenToSquare":
      return faPenToSquare;
  }
};

export function ButtonPrimary({ icon, name }) {
  return (
    <button
      type="button"
      className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-5"
    >
      <FontAwesomeIcon icon={handleIcon(icon)} className="mr-2" />
      {name}
    </button>
  );
}
