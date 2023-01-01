import { CardsColors } from "../../../shared/constants";
import { exchangeCourse } from "../../../shared/data";
import useCourses from "../../../shared/useCourses";
import Block from "./Block";

export default function ExchangeBlock() {
  const { addToSavedCourses } = useCourses();
  return (
    <Block
      title="Utbyte"
      subtitle="Du är inte i Sverige"
      background={CardsColors.exchange}
      onAddCourseClick={() => addToSavedCourses(exchangeCourse)}
    />
  );
}
