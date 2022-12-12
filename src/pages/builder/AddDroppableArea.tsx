import { IoIosAddCircleOutline } from 'react-icons/io'


interface AddDroppableAreaProps {
    onClick: () => void;
}

export default function AddDroppableArea({ onClick } : AddDroppableAreaProps) {
  return (
    <div className={`w-80 h-16 bg-white border border-onyx text-onyx border-solid rounded-xl
                     flex justify-center items-center hover:bg-creamDark cursor-pointer`}
        onClick={onClick}
    >
      <IoIosAddCircleOutline  size="3em" />
    </div>
  )
}
