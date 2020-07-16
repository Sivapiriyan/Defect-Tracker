import {
  ADD_EMPLOYEE,
  FETCH_EMPLOYEE,
  UPDATE_EMPLOYEE,
  VIEW_ADD_DRAWER_FORM,
  CLOSE_ADD_DRAWER_FORM,
  VIEW_UPDATE_DRAWER_FORM,
  CLOSE_UPDATE_DRAWER_FORM,
  } from './../type/TypesEmployee'
import axios from 'axios';

export const fetchemployee = () => dispatch => {
    axios.get('http://localhost:5000/employees')
      .then(res =>     
        dispatch({
          type: FETCH_EMPLOYEE,
          payload: res.data        
        })
      )
      .catch(error => {
        console.log(error)
      })
  };

  export const addemployee = employee => dispatch => {
    axios.post('http://localhost:5000/employees/add', employee)
      .then(res =>
        dispatch({
          type: ADD_EMPLOYEE,
          payload: {AddMsg:'add'}
        })
      )
      .catch(err =>
        dispatch({
          type: ADD_EMPLOYEE,
          payload: {AddMsg:'err_add'}
        })
      );
  };

  export const updateemployee = (id,employee) => dispatch => {
    axios.put(`http://localhost:5000/employees/update/${id}`,employee)
      .then(res =>
        dispatch({
          type: UPDATE_EMPLOYEE,
          payload: {updateMsg:'update',data:employee}
        })
      )
      .catch(err =>
        dispatch({
          type: UPDATE_EMPLOYEE,
          payload: {updateMsg:'err_up',data:null}
        })
      );
  };

  // add drawer form actions

  export const viewAddDrawerForm = () => dispatch => {
    dispatch({
      type:VIEW_ADD_DRAWER_FORM,
      payload:{showValue:true},      
    })
    
  };

  export const closeAddDrawerForm = () => dispatch => {
    dispatch({
      type:CLOSE_ADD_DRAWER_FORM,
      payload:{showValue:false},      
    })
    
  }
   // update drawer form actions

  export const viewUpdateDrawerForm = (employeeUpdateData) => dispatch => {
    dispatch({
      type:VIEW_UPDATE_DRAWER_FORM,
      payload:{showValue:true,employeeUpdateData},      
    })
    
  };

  export const closeUpdateDrawerForm = () => dispatch => {
    dispatch({
      type:CLOSE_UPDATE_DRAWER_FORM,
      payload:{showValue:false},      
    })
    
  }



