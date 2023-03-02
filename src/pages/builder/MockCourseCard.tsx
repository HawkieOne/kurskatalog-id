
interface MockCourseCardProps {
    onClick: () => void;
}
export default function MockCourseCard({ onClick } : MockCourseCardProps) {
  return (
    <div
      className={`h-32 w-80 flex justify-center items-center rounded-md 
                    border border-onyx dark:border-white border-dashed cursor-pointer hover:bg-whiteBackground hover:text-onyx`}
      onClick={onClick}
    >
      Lägg till en kurs för att se den här
    </div>
  );
}
