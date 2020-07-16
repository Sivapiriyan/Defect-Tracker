import React, { Component } from 'react'
import { Button, Col, Row, Statistic } from "antd";
import { connect } from 'react-redux';
import { viewDefectAddDrawerForm } from '../redux/action/ActionDefect';
import ViewDefect from './ViewDefectDetails'
import AddDefect from './AddDefectDetailsForm'
import UpdateDefect from './UpdateDefectDetailsForm'
import {
  FallOutlined,
  RiseOutlined,
  StockOutlined,
  BugOutlined,
  RadarChartOutlined,
} from "@ant-design/icons";

export class defect extends Component {
  state = {
    totalDefects: '',
    high: '',
    medium: '',
    low: '',
    newdef: ''


  };
  componentDidMount() {
    for (let i = 0; i < this.props.defect.length; i++) {
      switch (this.props.defect[i].severity) {
        case "High":
          this.setState({
            high: this.state.high + 1,
          });
          break;
        case "Medium":
          this.setState({
            medium: this.state.medium + 1,
          });
          break;
        case "Low":
          this.setState({
            low: this.state.low + 1,
          });
          break;
      }
      switch (this.props.defect[i].status) {
        case "New":
          this.setState({
            newdef: this.state.newdef + 1,
          });
          break;
      }
    }
  }
  render() {
    return (
      <div>
        <Row gutter={8}>
          <Col span={3}>
            <Button
              type="primary"
              ghost
              style={{
                marginBottom: 16,
                marginTop: 10,
              }}
              onClick={this.props.viewDefectAddDrawerForm}
            >
              Add New Defect
            </Button>
          </Col>
          <Col span={6}>
            <Button
              danger
              onClick={this.clearFilters}
              style={{
                marginBottom: 16,
                marginTop: 10,
              }}
            >
              Clear filters
            </Button>
          </Col>
          <Col span={3}>
            <Statistic
              title="High Severity"
              style={{ textAlign: "center" }}
              value={this.state.high}
              valueStyle={{ color: "red", textAlign: "center" }}
              prefix={<RiseOutlined />}
            ></Statistic>
          </Col>
          <Col span={3}>
            <Statistic
              title="Medium Severity"
              style={{ textAlign: "center" }}
              value={this.state.medium}
              valueStyle={{ color: "orange", textAlign: "center" }}
              prefix={<StockOutlined />}
            ></Statistic>
          </Col>
          <Col span={3}>
            <Statistic
              title="Low Severity"
              style={{ textAlign: "center" }}
              value={this.state.low}
              valueStyle={{ color: "green", textAlign: "center" }}
              prefix={<FallOutlined />}
            ></Statistic>
          </Col>
          <Col span={3}>
            <Statistic
              title="New Defects"
              style={{ textAlign: "center" }}
              value={this.state.newdef}
              valueStyle={{ color: "blue", textAlign: "center" }}
              prefix={<RadarChartOutlined />}
            ></Statistic>
          </Col>
          <Col span={3}>
            <Statistic
              title="Total Defects"
              style={{ textAlign: "center" }}
              value={this.props.defect.length}
              valueStyle={{ color: "magenta", textAlign: "center" }}
              prefix={<BugOutlined />}
            ></Statistic>
          </Col>
        </Row>
        <ViewDefect />
        <AddDefect />
        <UpdateDefect/>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  defect: state.ReducerDefect.defect
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    viewDefectAddDrawerForm: () => { dispatch(viewDefectAddDrawerForm()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(defect)
