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
      className="md:mr-5 mb-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      <FontAwesomeIcon icon={handleIcon(icon)} className="mr-2" />
      {name}
    </button>
  );
}
