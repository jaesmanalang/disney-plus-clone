import { forwardRef } from 'react';
import clsx from 'clsx';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

const CustomArrow = forwardRef(
  ({ style, className, onClick, direction, show = true }, ref) => {
    return (
      <button
        ref={ref}
        style={{ ...style, display: 'none' }}
        onClick={onClick}
        className={clsx(
          'transition-all duration-300 ease-in-out text-center min-w-[32px] w-[6%] bg-[rgba(0,0,0,.7)] text-white text-2xl absolute top-0 right-0 h-full z-[999] opacity-20 hover:opacity-100',
          {
            'left-auto -right-3': direction === 'next',
            'right-auto -left-3': direction === 'prev',
            className,
          }
        )}
      >
        <span className="flex justify-center items-center w-full h-full font-bold">
          {direction === 'prev' ? (
            <RiArrowLeftSLine className="font-bold text-2xl md:text-4xl" />
          ) : (
            <RiArrowRightSLine className="font-bold text-2xl md:text-4xl" />
          )}
        </span>
      </button>
    );
  }
);

export default CustomArrow;
