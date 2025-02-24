import { AppDispatch, actionCreator } from "../redux/store";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { AnyAction } from "redux";

export const useAppDispatch = () => {
    const dispatch = useDispatch<AppDispatch>();
    return useCallback((create: (creator: typeof actionCreator) => AnyAction) => {
        dispatch(create(actionCreator))
    }, [dispatch]);
};