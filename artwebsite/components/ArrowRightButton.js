import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export const ArrowRightButton = () => {
  return (
    <span
      className="arrow-right p-2 hover:bg-gray-400 rounded-full text-black cursor-pointer"
      role="button"
      aria-label="Next"
    >
      <FontAwesomeIcon icon={faChevronRight} />
    </span>
  );
};
