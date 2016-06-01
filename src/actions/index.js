export const RECV_VALUE = "RECV_VALUE";
export const SET_LOADING_STATUS = "SET_LOADING_STATUS";

export function receiveValue(value) {
    return {
        type: RECV_VALUE,
        value: value
    };
}

export function setLoadingStatus(status) {
    return {
        type: SET_LOADING_STATUS,
        status: status
    }
}
