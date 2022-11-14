import { IoIosAddCircleOutline } from 'react-icons/io'


interface AddDroppableAreaProps {
    onClick: () => void;
}

export default function AddDroppableArea({ onClick } : AddDroppableAreaProps) {
  return (
    <div className={`w-64 h-24 bg-white border border-onyx border-dashed rounded-xl
                     flex justify-center items-center hover:bg-cream cursor-pointer`}
        onClick={onClick}                 
    >
      <IoIosAddCircleOutline  size="3em" />
    </div>
  )
}
