import { SerializedError } from "@reduxjs/toolkit";

export interface DataState<T> {
    callState: CallState,
    data?: T,
    error?: SerializedError 
}

export enum CallState {
    INIT,
    LOADING,
    LOADED,
    ERROR
}