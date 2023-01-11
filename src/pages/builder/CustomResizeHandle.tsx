import React from "react";

export const BottomRightHandle = React.forwardRef<
  HTMLInputElement,
  { handleAxis?: string }
>((props, ref) => {
  const { handleAxis, ...restProps } = props;
  return (
    <div
      ref={ref}
      className={`resizeHandle handle-${handleAxis}`}
      {...restProps}
    >Hej</div>
  );
});
