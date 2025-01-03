import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export const ArrowRightButton = () => {
  return (
    <span
      className="arrow-right p-2 bg-gray-300 hover:bg-gray-400 text-black rounded-full cursor-pointer"
      role="button"
      aria-label="Next"
    >
      <FontAwesomeIcon icon={faChevronRight} />
    </span>
  );
};
