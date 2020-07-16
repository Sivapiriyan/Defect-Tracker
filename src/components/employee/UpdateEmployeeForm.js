import React, { Component } from 'react'
import { Drawer, Form, Col, Row, Select, Input, Button, DatePicker, message,Typography} from "antd";
import { connect } from 'react-redux';
import { PlusCircleOutlined, ClearOutlined } from '@ant-design/icons';
import { closeUpdateDrawerForm, updateemployee} from '../../components/redux/action/ActionEmployee';
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
const { Option } = Select;
const { TextArea } = Input;
const { Text } = Typography
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

export class UpdateEmployeeForm extends Component {
    state = {
        id: '',
        employeeId:'',
        firstName: '',
        lastName: '',
        DOB: '',
        NIC: '',
        address: '',
        email: '',
        number: '',
        department: '',
        position: ''
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.updateEmployeeData) {
            this.setState({
                id: nextProps.updateEmployeeData._id,
                employeeId:nextProps.updateEmployeeData.employeeId,
                firstName: nextProps.updateEmployeeData.employeeFirstName,
                lastName: nextProps.updateEmployeeData.employeeLastName,
                DOB: nextProps.updateEmployeeData.employeeDOB,
                NIC: nextProps.updateEmployeeData.employeeNIC,
                address: nextProps.updateEmployeeData.employeeAddress,
                email: nextProps.updateEmployeeData.employeeEmail,
                number: nextProps.updateEmployeeData.employeeMobileNumber,
                department: nextProps.updateEmployeeData.employeeDepartment,
                position: nextProps.updateEmployeeData.employeePosition,
            })
        }

    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };
    handledepartmentChange = value => {
        this.setState({ department: value });
    };
    handlepositionChange = value => {
        this.setState({ position: value });
    };
    onDateChange = (date, dateString) => {
        this.setState({ DOB: dateString })
    }
    onUpdate = () => {
        const employeeUpdateData = {
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
        this.props.updateemployee(this.state.id, employeeUpdateData)
        this.props.closeUpdateDrawerForm()
        message.success("Update Employee Successfully")
            .then(() => {
                window.location.reload();
            })
    }

    render() {
        return (
            <div>
                <Drawer
                    title="Update Employee Details"
                    width={720}
                    onClose={this.props.closeUpdateDrawerForm}
                    visible={this.props.showValueUpdateForm}

                >
                    <Form layout="vertical" hideRequiredMark name="nest-messages" onFinish={this.onUpdate} validateMessages={validateMessages}>
                        <Row gutter={16}>
                            <Col span={12}>
                            <Form.Item>
                                    <Text mark style={{ float: "left", fontSize: "16px" }}>
                                        Employee ID: {this.state.employeeId}
                                </Text>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    label="First Name"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input
                                        name="firstName"
                                        value={this.state.firstName}
                                        onChange={(event) => this.handleChange(event)}
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="Last Name"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input name="lastName"
                                        value={this.state.lastName}
                                        onChange={(event) => this.handleChange(event)} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    label="Date of Birth"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <DatePicker placeholder={this.state.DOB} name="DOB" style={{ width: 320 }} format={dateFormatList} onChange={this.onDateChange} />

                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="NIC Number"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input name="NIC"
                                        value={this.state.NIC}
                                        onChange={(event) => this.handleChange(event)} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    label="Email"
                                    rules={[
                                        {
                                            required: true
                                        },
                                    ]}
                                >
                                    <Input name="email"
                                        value={this.state.email}
                                        onChange={(event) => this.handleChange(event)} />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="Mobile Number"
                                    rules={[
                                        {
                                            required: true
                                        },
                                    ]}
                                >
                                    <Input name="number"
                                        type="number"
                                        value={this.state.number}
                                        onChange={(event) => this.handleChange(event)} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item
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
                                        value={this.state.address}
                                        onChange={(event) => this.handleChange(event)}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    label="Department"
                                    rules={[
                                        {
                                            required: true
                                        },
                                    ]}
                                >
                                    <Select value={this.state.department} name="department" onChange={this.handledepartmentChange}>
                                        <Option value="Developer">Developer</Option>
                                        <Option value="QA">QA</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="Position"
                                    rules={[
                                        {
                                            required: true
                                        },
                                    ]}
                                >
                                    <Select value={this.state.position} name="position" onChange={this.handlepositionChange}>
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
                                        <PlusCircleOutlined />  Update
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
    updateMsg: state.ReducerEmployee.updateMsg,
    showValueUpdateForm: state.ReducerEmployee.UpdateEmployeeDrawerShow,
    updateEmployeeData: state.ReducerEmployee.updateEmployeeData
});
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        closeUpdateDrawerForm: () => { dispatch(closeUpdateDrawerForm()) },
        updateemployee: (id, employee) => { dispatch(updateemployee(id, employee)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateEmployeeForm)
