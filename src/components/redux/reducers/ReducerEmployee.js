import {
    ADD_EMPLOYEE,
    FETCH_EMPLOYEE,
    UPDATE_EMPLOYEE,
    VIEW_ADD_DRAWER_FORM,
    CLOSE_ADD_DRAWER_FORM,
    VIEW_UPDATE_DRAWER_FORM,
    CLOSE_UPDATE_DRAWER_FORM,
    } from './../type/TypesEmployee';
    

const initialState = {
    employees: [],
    updateMsg: '',
    AddEmployeeDrawerShow: '',
    UpdateEmployeeDrawerShow: '',
    updateEmployeeData: '',
    addMsg: '',
    messageShow: ''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_EMPLOYEE:
            return {
                ...state,
                employees: action.payload
            };
        case ADD_EMPLOYEE:
            return {
                ...state,
                addMsg: action.payload.addMsg,
            };
        case UPDATE_EMPLOYEE:
            return {
                ...state,
                updateMsg: action.payload.updateMsg,
            };
        case VIEW_ADD_DRAWER_FORM:
            return {
                ...state,
                AddEmployeeDrawerShow: action.payload.showValue,
            };
        case CLOSE_ADD_DRAWER_FORM:
            return {
                ...state,
                AddEmployeeDrawerShow: action.payload.showValue,
            };
        case VIEW_UPDATE_DRAWER_FORM:
            return {
                ...state,
                UpdateEmployeeDrawerShow: action.payload.showValue,
                updateEmployeeData: action.payload.employeeUpdateData
            };
        case CLOSE_UPDATE_DRAWER_FORM:
            return {
                ...state,
                UpdateEmployeeDrawerShow: action.payload.showValue,
            };
        default:
            return state;
    }
}