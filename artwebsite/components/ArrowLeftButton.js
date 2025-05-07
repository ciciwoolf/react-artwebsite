import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export const ArrowLeftButton = () => {
  return (
    <span
      className="arrow-left p-2 hover:bg-gray-400 text-black rounded-full cursor-pointer"
      role="button"
      aria-label="Previous"
    >
      <FontAwesomeIcon icon={faChevronLeft} />
    </span>
  );
};
