
interface MockCourseCardProps {
    onClick: () => void;
}
export default function MockCourseCard({ onClick } : MockCourseCardProps) {
  return (
    <div
      className={`text-onyx h-32 w-80 flex justify-center items-center rounded-md 
                    border border-onyx border-dashed cursor-pointer hover:bg-whiteBackground`}
      onClick={onClick}
    >
      Lägg till en kurs för att se den här
    </div>
  );
}
