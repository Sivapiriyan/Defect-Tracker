import { ADD_DEFECT, FETCH_DEFECT,UPDATE_DEFECT, VIEW_DEFECT_ADD_DRAWER_FORM, CLOSE_DEFECT_ADD_DRAWER_FORM, VIEW_DEFECT_UPDATE_DRAWER_FORM, CLOSE_DEFECT_UPDATE_DRAWER_FORM} from './../type/TypesDefect'
import axios from 'axios';

export const fetchdefect = () => dispatch => {
  axios.get('http://localhost:5000/defects')
    .then(res =>
      dispatch({
        type: FETCH_DEFECT,
        payload: { defect: res.data }
      })
    ).catch(err =>
      dispatch({
        type: FETCH_DEFECT,
        payload: { viewMsg: err }
      }))
}

export const adddefect = defect => dispatch => {
  axios.post('http://localhost:5000/defects/add', defect)
    .then(res =>
      dispatch({
        type: ADD_DEFECT,
        payload: { addMsg: 'Successfully Add a Defect', data: defect }
      })
    )
    .catch(err =>
      dispatch({
        type: ADD_DEFECT,
        payload: { addMsg: 'Error to add a defect', data: null }
      })
    );
};

export const updatedefect =(id,defect) => dispatch => {
  axios.put(`http://localhost:5000/defects/update/${id}`,defect)
    .then(res =>
      dispatch({
        type: UPDATE_DEFECT,
        payload: {updateMsg:'update',data:defect}
      })
    )
    .catch(err =>
      dispatch({
        type: UPDATE_DEFECT,
        payload: {updateMsg:'err_up',data:null}
      })
    );
};

//add form show value set functions

export const viewDefectAddDrawerForm = () => dispatch => {
  dispatch({
    type: VIEW_DEFECT_ADD_DRAWER_FORM,
    payload: { defectAddFormShowValue: true }
  })
}

export const closeDefectAddDrawerForm = () => dispatch => {
  dispatch({
    type: CLOSE_DEFECT_ADD_DRAWER_FORM,
    payload: { defectAddFormShowValue: false }
  })
}
//update form show value set functions
export const viewDefectUpdateDrawerForm = (updateDefectData) => dispatch => {
  dispatch({
    type: VIEW_DEFECT_UPDATE_DRAWER_FORM,
    payload: { defectUpdateFormShowValue: true,updateDefectData}
  })
}

export const closeDefectUpdateDrawerForm = () => dispatch => {
  dispatch({
    type: CLOSE_DEFECT_UPDATE_DRAWER_FORM,
    payload: { defectUpdateFormShowValue: false }
  })
}

