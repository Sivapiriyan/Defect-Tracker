import React, { Component } from 'react'
import { Drawer, Form, Col, Row, Select,Input, Button,DatePicker,message} from "antd";
import { PlusCircleOutlined, ClearOutlined} from '@ant-design/icons';
import { addemployee, closeAddDrawerForm} from '../../components/redux/action/ActionEmployee';
import { connect } from 'react-redux';
const { Option } = Select;
const { TextArea } = Input;
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not validate email!',
        number: '${label} is not a validate number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
export class AddEmployeeForm extends Component {
    formRef = React.createRef();
    state = {
        id: '',
        firstName: '',
        lastName: '',
        DOB: '',
        NIC: '',
        address: '',
        email: '',
        number: '',
        department: '',
        employee: '',
        position: ''
    }
    // componentWillReceiveProps(nextProps){
    //     console.log(nextProps.addMsg)
    //     if(nextProps.addMsg==='add'){
    //         this.formRef.current.resetFields()
    //         message.success('Add Successfully')
    //                 .then(() => {
    //                     window.location.reload();
    //                 })
    //             this.props.closeAddDrawerForm()                
    //     } 
    //     else if(nextProps.addMsg==='err'){
    //         message.error('Error to Add')
    //     }     
    // }
    // messageShow = (type) => {
    //     notification[type]({
    //       message: 'Notification Title',
    //       description:
    //         'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    //     });
    //   }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,

        });
    }
    onFinish = (event) => {
        const employee = {
            employeeId: this.props.employees.length + 1,
            employeeFirstName: this.state.firstName,
            employeeLastName: this.state.lastName,
            employeeDOB: this.state.DOB,
            employeeNIC: this.state.NIC,
            employeeAddress: this.state.address,
            employeeEmail: this.state.email,
            employeeMobileNumber: this.state.number,
            employeeDepartment: this.state.department,
            employeePosition: this.state.position
        }
        this.props.addemployee(employee);
        this.formRef.current.resetFields();
        this.props.closeAddDrawerForm(); 
        message.success("Add New Employee Successfully")
            .then(() => {
                window.location.reload();
            })   
          
                
    }
    handledepartmentChange = value => {
        this.setState({ department: value });
    };
    handlepositionChange = value => {
        this.setState({ position: value });
    };
    onChange = (date, dateString) => {
        this.setState({ DOB: dateString })
    }
    render() {
        return (
            <div>
                <Drawer
                    title="Add New Employee"
                    width={720}
                    onClose={this.props.closeAddDrawerForm}
                    visible={this.props.showValueAddForm}
                    placement='left'

                >
                    <Form layout="vertical" hideRequiredMark name="nest-messages" ref={this.formRef} onFinish={this.onFinish} validateMessages={validateMessages}>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name="FirstName"
                                    label="First Name"
                                    onChange={this.handleChange}
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}

                                >
                                    <Input name="firstName" placeholder="First Name" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name="LastName"
                                    label="Last Name"
                                    onChange={this.handleChange}
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input name="lastName" placeholder="Last Name" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name="dob"
                                    label="Date of Birth"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <DatePicker name="DOB" style={{ width: 323 }} onChange={this.onChange} />

                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name="nic"
                                    label="NIC Number"
                                    onChange={this.handleChange}
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input name="NIC" placeholder="NIC Number" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name="Email"
                                    onChange={this.handleChange}
                                    label="Email"
                                    rules={[
                                        {
                                            required: true
                                        },
                                    ]}
                                >
                                    <Input name="email" placeholder="Email" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name="mobileNumber"
                                    onChange={this.handleChange}
                                    label="Mobile Number"
                                    rules={[
                                        {
                                            required: true
                                        },
                                    ]}
                                >
                                    <Input name="number" placeholder="Mobile Number" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item
                                    name="Address"
                                    onChange={this.handleChange}
                                    label="Address"
                                    rules={[
                                        {
                                            required: true
                                        },
                                    ]}
                                >
                                    <TextArea
                                        placeholder="Address......."
                                        autoSize={{ minRows: 3, maxRows: 5 }}
                                        name="address"
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name="Department"
                                    onChange={this.handleChange}
                                    label="Department"
                                    rules={[
                                        {
                                            required: true
                                        },
                                    ]}
                                >
                                    <Select value={this.state.department} defaultValue="Select Department" name="department" onChange={this.handledepartmentChange}>
                                        <Option value="Developer">Developer</Option>
                                        <Option value="QA">QA</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name="Position"
                                    onChange={this.handleChange}
                                    label="Position"
                                    rules={[
                                        {
                                            required: true
                                        },
                                    ]}
                                >
                                    <Select value={this.state.position} defaultValue="Select Position" name="position" onChange={this.handlepositionChange}>
                                        <Option value="Associate">Associate</Option>
                                        <Option value="Lead">Lead</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item >
                                    <Button type="danger" onClick={this.clearClick} style={{ width: 100, marginTop: 30, marginLeft: 450 }}>
                                        <ClearOutlined />
                                        Clear
                                 </Button>
                                    &nbsp;
                                <Button type="primary" htmlType="submit" style={{ width: 100 }}>
                                        <PlusCircleOutlined />  Submit
                                 </Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Drawer>               
            </div>
        )
    }
}

const mapStateToProps = state => ({    
    employees: state.ReducerEmployee.employees,
    showValueAddForm: state.ReducerEmployee.AddEmployeeDrawerShow,
    addMsg: state.ReducerEmployee.addMsg,
});

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addemployee: (employees) => { dispatch(addemployee(employees)) },
        closeAddDrawerForm: () => { dispatch(closeAddDrawerForm()) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEmployeeForm)
