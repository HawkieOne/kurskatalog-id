import { useMemo, useState } from "react";
import isEqual from "lodash/isEqual";
import { Year } from "./interfaces";
import { useRecoilState } from "recoil";
import { editingHistorySelector, editingHistoryIndex } from "../atoms/atoms";

export const useEditinghistory = () => {
  const [index, setIndex] = useRecoilState(editingHistoryIndex);
  const [states, setStates] = useRecoilState(editingHistorySelector);
  const state = useMemo(() => states[index], [states, index]);
  const [doingAction, setDoingAction] = useState(false);

  const setState = (value: Year[]) => {
    if (isEqual(state, value)) {
      return;
    }
    const copy = states.slice(0, index + 1); // This removes all future (redo) states after current index
    copy.push(value);
    setStates(copy);
    setIndex(copy.length - 1);
  };
  console.log(states);
  console.log(index);

  const addAction = (value: Year[]) => {
    if (!doingAction) {
      const copy = states.slice();
      copy.push(value);
      console.log(copy);
      setStates(copy);
      setIndex(copy.length - 1);
      setDoingAction(false);
    }
  };

  const resetState = (init: Year[]) => {
    setIndex(0);
    setStates([init]);
  };

  const goBack = (steps = 1) => {
    // On layout get called when index is changed (after returning undo)
    console.log(index);
    if (index - steps >= 1) {
      setDoingAction(true);
      const undoState = states[index - steps];
      setIndex(index - steps);
      return undoState;
    }
    return null;
  };

  const goForward = (steps = 1) => {
    setIndex(Math.min(states.length - 1, Number(index) + (Number(steps) || 1)));
  };

  return {
    state,
    setState,
    resetState,
    addAction,
    index,
    lastIndex: states.length - 1,
    goBack,
    goForward,
    doingAction,
    setDoingAction,
  };
};
