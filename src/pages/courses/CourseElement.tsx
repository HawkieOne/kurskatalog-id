import { useNavigate } from "react-router-dom";
import Text from "../../components/Text";
import Title from "../../components/Title";
import { TextVariants, TitleVariants } from "../../shared/constants";
import { Course } from "../../shared/interfaces";
import ColorSquare from "./ColorSquare";
import { AnimatePresence, motion } from "framer-motion";

interface CourseProps {
  course: Course;
}

export default function CourseElement({ course }: CourseProps) {
  const navigate = useNavigate();
  return (
    <AnimatePresence>
      <motion.div
        layout
        key={course.code}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
        className="w-full flex justify-between p-3 rounded-md even:hover:bg-ashGrey odd:hover:bg-boneGrey hover:text-onyx
                    cursor-pointer"
        onClick={() =>
          navigate(course.name, {
            state: { course: course },
          })
        }
      >
        <div className="basis-3/4 flex flex-col justify-evenly">
          <Title size={TitleVariants.small}>{course.name}</Title>
          <Text>{course.code}</Text>
          <div className="w-2/4 flex space-x-4">
            {course.location && (
              <Text size={TextVariants.small}>{course.location}</Text>
            )}
            <Text size={TextVariants.small}>{course.level}</Text>
          </div>
        </div>
        <div className="basis-1/5 flex justify-end space-x-4 text-w½hite p-8">
          {course.points && <ColorSquare value={course.points} text="hp" />}
          {course.pace && <ColorSquare value={course.pace} text="%" />}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
