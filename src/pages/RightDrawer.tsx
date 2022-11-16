import { createRef } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { courseRightDrawerState, rightDrawerState } from "../atoms/atoms";
import Title from "../components/Title";
import { TitleVariant } from "../shared/constants";
import { useOnClickOutside } from "../shared/onClickOutside";

export default function RightDrawer() {
  const setIsRightDrawerOpen = useSetRecoilState(rightDrawerState);
  const courseDrawer = useRecoilValue(courseRightDrawerState);
  const rightDrawerRef = createRef<HTMLDivElement>();
  useOnClickOutside(rightDrawerRef, () => setIsRightDrawerOpen(false));
  return (
    <div
      className="absolute w-80 text-onyx bg-white inset-y-0 right-0 shadow-lg p-2"
      ref={rightDrawerRef}
    >
      {courseDrawer ? (
        <div>
          <Title size={TitleVariant.small}>{courseDrawer.name}</Title>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
