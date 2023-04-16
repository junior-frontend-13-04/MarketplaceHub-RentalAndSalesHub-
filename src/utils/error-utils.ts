
import { Dispatch } from 'redux'
import {setAppError, SetAppErrorActionType, setAppStatus, SetAppStatusActionType} from "src/bll/Redux/app-reducer";

export const handleServerNetworkError = (error: string, dispatch: Dispatch<SetAppErrorActionType | SetAppStatusActionType>) => {
    dispatch(setAppError(error ? error : 'Some error occurred'))
    dispatch(setAppStatus('failed'))
}
