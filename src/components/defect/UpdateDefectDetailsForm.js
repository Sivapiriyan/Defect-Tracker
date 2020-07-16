import React, { Component } from 'react'
import "antd/dist/antd.css";
import {
    Drawer, Form, Col, Row, Select, Input,
    Button,
    Typography,
    message
} from "antd";
import { closeDefectUpdateDrawerForm,updatedefect} from '../redux/action/ActionDefect'
import { connect } from 'react-redux';
const { Option } = Select;
const { Text } = Typography

export class UpdateDefectDetailsForm extends Component {
    state = {
        id: "",
        defectsId: "",
        defectsName: "",
        stepToRecreate: "",
        type: "",
        status: "",
        severity: "",
        priority: "",
        enteredBy: "",
        foundIn: "",
        availableIn: "",
        assignTo: "",
        module: "",
        subModule: "",
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.updateDefectData) {
            this.setState({
                id: nextProps.updateDefectData._id,
                defectsId:nextProps.updateDefectData.defectsId,
                defectsName: nextProps.updateDefectData.defectsName,
                stepToRecreate: nextProps.updateDefectData.stepToRecreate,
                type: nextProps.updateDefectData.type,
                status: nextProps.updateDefectData.status,
                severity: nextProps.updateDefectData.severity,
                priority: nextProps.updateDefectData.priority,
                enteredBy: nextProps.updateDefectData.enteredBy,
                foundIn: nextProps.updateDefectData.foundIn,
                availableIn: nextProps.updateDefectData.availableIn,
                assignTo: nextProps.updateDefectData.assignTo,
                module: nextProps.updateDefectData.module,
                subModule: nextProps.updateDefectData.subModule,
            })
        }

    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleSelect = (name, value) => {
        if (name === "type") {
            this.setState({
                type: value,
            });
        } else if (name === "status") {
            this.setState({
                status: value,
            });
        } else if (name === "severity") {
            this.setState({
                severity: value,
            });
        } else if (name === "priority") {
            this.setState({
                priority: value,
            });
        } else if (name === "enteredBy") {
            this.setState({
                enteredBy: value,
            });
        } else if (name === "assignTo") {
            this.setState({
                assignTo: value,
            });
        } else if (name === "foundIn") {
            this.setState({
                foundIn: value,
            });
        } else if (name === "availableIn") {
            this.setState({
                availableIn: value,
            });
        } else if (name === "module") {
            this.setState({
                module: value,
            });
        } else if (name === "submodule") {
            this.setState({
                subModule: value,
            });
        }
    };
    clickUpdate=()=>{
        const updatedefect={
            defectsId: this.state.defectsId,
            defectsName: this.state.defectsName,
            stepToRecreate:this.state.stepToRecreate,
            type: this.state.type,
            status: this.state.status,
            severity:this.state.severity,
            priority: this.state.priority,
            enteredBy: this.state.enteredBy,
            assignTo: this.state.assignTo,
            foundIn:this.state.foundIn,
            availableIn:this.state.availableIn,
            module:this.state.module,
            subModule:this.state.subModule
        }
        this.props.updatedefect(this.state.id,updatedefect);
        this.props.closeDefectUpdateDrawerForm();
        message.success("Update Defect Successfully")
            .then(() => {
                window.location.reload();
            }) 
    }
    render() {
        return (
            <div>
                <Drawer
                    title="Update Defect Details"
                    width={720}
                    onClose={this.props.closeDefectUpdateDrawerForm}
                    visible={this.props.defectUpdateFormShowValue}
                    bodyStyle={{ paddingBottom: 80 }}
                    footer={
                        <div
                            style={{
                                textAlign: "right",
                            }}
                        >
                            <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                                Cancel
              </Button>
                            <Button onClick={(e) => this.clickUpdate(e)} type="primary">
                                Update
              </Button>
                        </div>
                    }
                >
                    <Form layout="vertical" hideRequiredMark>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item>
                                    <Text mark style={{ float: "left", fontSize: "16px" }}>
                                        Defects ID: {this.state.defectsId}
                                </Text>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item
                                    label="Defect"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input
                                        placeholder="Defect"
                                        name="defectsName"
                                        id="defectsName"
                                        value={this.state.defectsName}
                                        onChange={(event, field) => this.handleChange(event, field)}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item
                                    label="Steps To Recreate"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input.TextArea
                                        name="stepToRecreate"
                                        rows={4}
                                        placeholder="please enter the steps to recreate"
                                        value={this.state.stepToRecreate}
                                        onChange={(event, field) => this.handleChange(event, field)}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    label="Type"
                                    
                                >
                                    <Select
                                        placeholder="Please select an Type"
                                        name="type"
                                        value={this.state.type}
                                        onChange={(value) => this.handleSelect("type", value)}
                                    >
                                        <Option value="Functional">Functional</Option>
                                        <Option value="Performance">Performance</Option>
                                        <Option value="UI">UI</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="Status"
                                    rules={[{ required: true, message: "Please choose the status" }]}
                                >
                                    <Select
                                        placeholder="Please choose the status"
                                        name="status"
                                        value={this.state.status}
                                        onChange={(value) => this.handleSelect("status", value)}
                                    >
                                        {(() => {
                                            switch (this.state.status) {
                                                case "New":
                                                    return (
                                                        <>
                                                            <Option value="Open">Open</Option>
                                                            <Option value="Reject">Reject</Option>
                                                        </>
                                                    );
                                                case "Closed":
                                                    return (
                                                        <>
                                                            <Option value="Re-open">Re-open</Option>
                                                        </>
                                                    );
                                                case "Fixed":
                                                    return (
                                                        <>
                                                            <Option value="Closed">Closed</Option>
                                                            <Option value="Re-open">Re-open</Option>
                                                        </>
                                                    );
                                                case "Re-open":
                                                    return (
                                                        <>
                                                            <Option value="Open">Open</Option>
                                                            <Option value="Reject">Reject</Option>
                                                        </>
                                                    );
                                                case "Open":
                                                    return (
                                                        <>
                                                            <Option value="Fixed">Fixed</Option>
                                                            <Option value="Reject">Reject</Option>
                                                        </>
                                                    );
                                                case "Reject":
                                                    return (
                                                        <>
                                                            <Option value="Re-open">Re-open</Option>
                                                            <Option value="Closed">Closed</Option>
                                                        </>
                                                    );
                                            }
                                        })()}
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    label="Serverity"
                                    rules={[{ required: true, message: "Please choose the serverity" }]}
                                >
                                    <Select
                                        placeholder="Please choose the serverity"
                                        name="serverity"
                                        value={this.state.severity}
                                        onChange={(value) => this.handleSelect("severity", value)}
                                    >
                                        <Option value="High">High</Option>
                                        <Option value="Medium">Medium</Option>
                                        <Option value="Low">Low</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="Priority"
                                    rules={[{ required: true, message: "Please choose the priority" }]}
                                >
                                    <Select
                                        placeholder="Please choose the priority"
                                        name="priority"
                                        value={this.state.priority}
                                        onChange={(value) => this.handleSelect("priority", value)}
                                    >
                                        <Option value="High">High</Option>
                                        <Option value="Medium">Medium</Option>
                                        <Option value="Low">Low</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    label="Entered By"
                                    rules={[
                                        { required: true, message: "Please choose the entered by" },
                                    ]}
                                >
                                    <Select
                                        placeholder="Please choose the entered by"
                                        name="enteredBy"
                                        value={this.state.enteredBy}
                                        onChange={(value) => this.handleSelect("enteredBy", value)}
                                    >
                                        <Option value="Sanjsijan">Sanjsijan</Option>
                                        <Option value="Lavanjan">Lavanjan</Option>
                                        <Option value="Sivapiriyan">Sivapiriyan</Option>
                                        <Option value="Gobika">Gobika</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="AssignTo"
                                    rules={[{ required: true, message: "Please choose the assign to" }]}
                                >
                                    <Select
                                        placeholder="Please choose the assign to"
                                        name="assignTo"
                                        value={this.state.assignTo}
                                        onChange={(value) => this.handleSelect("assignTo", value)}
                                    >
                                        <Option value="Sanjsijan">Sanjsijan</Option>
                                        <Option value="Lavanjan">Lavanjan</Option>
                                        <Option value="Sivapiriyan">Sivapiriyan</Option>
                                        <Option value="Gobika">Gobika</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    label="Found In"
                                    rules={[{ required: true, message: "Please choose the found in" }]}
                                >
                                    <Select
                                        placeholder="Please choose the found in"
                                        name="foundIn"
                                        value={this.state.foundIn}
                                        onChange={(value) => this.handleSelect("foundIn", value)}
                                    >
                                        <Option value="Rel-1">Rel-1</Option>
                                        <Option value="Rel-2">Rel-2</Option>
                                        <Option value="Rel-3">Rel-3</Option>
                                        <Option value="Rel-4">Rel-4</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="Available In"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please choose the available in",
                                        },
                                    ]}
                                >
                                    <Select
                                        placeholder="Please choose the available in"
                                        name="availableIn"
                                        value={this.state.availableIn}
                                        onChange={(value) => this.handleSelect("availableIn", value)}
                                    >
                                        <Option value="Rel-1">Rel-1</Option>
                                        <Option value="Rel-2">Rel-2</Option>
                                        <Option value="Rel-3">Rel-3</Option>
                                        <Option value="Rel-4">Rel-4</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    label="Module"
                                    rules={[{ required: true, message: "Please choose the Module" }]}
                                >
                                    <Select
                                        placeholder="Please choose the module"
                                        name="module"
                                        value={this.state.module}
                                        onChange={(value) => this.handleSelect("module", value)}
                                    >
                                        <Option value="Module-1">Module-1</Option>
                                        <Option value="Module-2">Module-2</Option>
                                        <Option value="Module-3">Module-3</Option>
                                        <Option value="Module-4">Module-4</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="SubModule"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please choose the Submodule",
                                        },
                                    ]}
                                >
                                    <Select
                                        placeholder="Please choose the Submodule"
                                        name="submodule"
                                        value={this.state.subModule}
                                        onChange={(value) => this.handleSelect("submodule", value)}
                                    >
                                        <Option value="SubModule-1">SubModule-1</Option>
                                        <Option value="SubModule-2">SubModule-2</Option>
                                        <Option value="SubModule-3">SubModule-3</Option>
                                        <Option value="SubModule-4">SubModule-4</Option>
                                    </Select>
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
    defectUpdateFormShowValue: state.ReducerDefect.defectUpdateFormShowValue,
    updateDefectData: state.ReducerDefect.updateDefectData
});
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        closeDefectUpdateDrawerForm: () => { dispatch(closeDefectUpdateDrawerForm()) },
        updatedefect:(id,defect)=>{dispatch(updatedefect(id,defect))}

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateDefectDetailsForm)








