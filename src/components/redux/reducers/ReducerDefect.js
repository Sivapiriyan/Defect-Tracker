import { ADD_DEFECT, FETCH_DEFECT,UPDATE_DEFECT, VIEW_DEFECT_ADD_DRAWER_FORM, CLOSE_DEFECT_ADD_DRAWER_FORM, VIEW_DEFECT_UPDATE_DRAWER_FORM, CLOSE_DEFECT_UPDATE_DRAWER_FORM} from './../type/TypesDefect'
import { act } from 'react-dom/test-utils';

const initialState = {
    defect: '',
    addMsg: '',
    viewMsg: '',
    updateMsg:'',
    defectAddFormShowValue: '',
    defectUpdateFormShowValue: '',
    updateDefectData:''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_DEFECT:
            return {
                ...state,
                defect: action.payload.defect,
                viewMsg: action.payload.viewMsg
            }
        case ADD_DEFECT:
            return {
                ...state,
                addMsg: action.payload.addMsg,
            };
            case UPDATE_DEFECT:
                return{
                    ...state,
                    updateMsg:action.payload.updateMsg
                }
        case VIEW_DEFECT_ADD_DRAWER_FORM:
            return {
                ...state,
                defectAddFormShowValue: action.payload.defectAddFormShowValue
            }
        case CLOSE_DEFECT_ADD_DRAWER_FORM:
            return {
                ...state,
                defectAddFormShowValue: action.payload.defectAddFormShowValue
            }
        case VIEW_DEFECT_UPDATE_DRAWER_FORM:
            return {
                ...state,
                defectUpdateFormShowValue: action.payload.defectUpdateFormShowValue,
                updateDefectData:action.payload.updateDefectData
            }
        case CLOSE_DEFECT_UPDATE_DRAWER_FORM:
            return {
                ...state,
                defectUpdateFormShowValue: action.payload.defectUpdateFormShowValue
            }
        default:
            return state;
    }
} 