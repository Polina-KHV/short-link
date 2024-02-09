import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { linksSlice } from "../store/linksSlice";
import { authSlice } from "../store/authSlice";

const rootActions = {
  ...linksSlice.actions,
  ...authSlice.actions
}

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => 
    bindActionCreators(rootActions, dispatch)
  , [dispatch])
}