import React, { Component } from 'react'
import { connect } from 'react-redux';
import {viewAddDrawerForm} from '../../components/redux/action/ActionEmployee';
import ViewEmployee from '../employee/ViewEmployee'
import AddEmployeeForm from '../employee/AddEmployeeForm'
import UpdateEmployeeForm from './UpdateEmployeeForm'
import { message, notification, Button } from 'antd';

export class employee extends Component {
  constructor(props) {
    super(props);
    this.state = {      
         
    };
  }
  messageShow = (type) => {
    notification[type]({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  }
  render() {
    return (
      <div>
        <Button
          type="primary"
          style={{
            marginBottom: 16,
          }}
          onClick={this.props.viewAddDrawerForm}
        >
          Add New Employee
            </Button>
        <ViewEmployee
        />
        <AddEmployeeForm 
        />
        <UpdateEmployeeForm
        />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  employees: state.ReducerEmployee.employees,

});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {   
    viewAddDrawerForm: () => { dispatch(viewAddDrawerForm()) },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(employee)
