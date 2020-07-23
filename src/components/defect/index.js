import React, { Component } from 'react'
import { Button, Col, Row, Badge,Avatar,Typography} from "antd";
import { connect } from 'react-redux';
import { viewDefectAddDrawerForm, fetchdefect } from '../redux/action/ActionDefect';
import ViewDefect from './ViewDefectDetails'
import AddDefect from './AddDefectDetailsForm'
import UpdateDefect from './UpdateDefectDetailsForm'
const { Text } = Typography;
export class defect extends Component {
  state = {
    
  };
  render() {
    return (
      <div>
        <Row gutter={8}>
          <Col span={6}>
            <Button
              type="primary"
              style={{
                marginBottom: 16,
                marginTop: 10,
                width: 100,
                marginLeft: 40,
              }}
              onClick={this.props.viewDefectAddDrawerForm}
            >
              Add Defect
            </Button>
            &nbsp; &nbsp; &nbsp;
            <Button
              type="primary"
              danger
              onClick={this.clearFilters}
              style={{
                marginBottom: 16,
                marginTop: 10,
                width: 100,
              }}
            >
              Reset Table
            </Button>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={24}>
            <div className="serverity-box">
              <Row gutter={16}>
                <Col span={6}>
                  <div className="sev-box">
                    <div className="sev-name">
                      <Text
                        style={{
                          fontWeight: "500",
                          color: "black",
                          fontStyle: "italic",
                          fontSize: 15,
                        }}
                        type="secondary"
                      >
                        RE-OPEN DEFECTS : {this.state.ropendef}
                      </Text>
                      <br />
                    </div>
                    <div className="total-sev">
                      <span className="avatar-item">
                        <Badge
                          count={this.state.ropenHigh}
                          style={{
                            backgroundColor: "red",
                          }}
                        >
                          <Avatar
                            style={{ color: "red", fontWeight: "bolder" }}
                            shape="circle"
                            icon="H"

                          />
                        </Badge>
                      </span>
                      <span className="avatar-item">
                        <Badge
                          count={this.state.ropenMedium}
                          style={{ backgroundColor: "#faad14" }}
                        >
                          <Avatar
                            style={{ color: "#faad14", fontWeight: "bolder" }}
                            shape="circle"
                            icon="M"
                          />
                        </Badge>
                      </span>
                      <span className="avatar-item">
                        <Badge
                          count={this.state.ropenLow}
                          style={{ backgroundColor: "#237804" }}
                        >
                          <Avatar
                            style={{ color: "green", fontWeight: "bolder" }}
                            shape="circle"
                            icon="L"
                          />
                        </Badge>
                      </span>
                    </div>
                  </div>
                </Col>
                <Col span={6}>
                  <div className="sev-box">
                    <div className="sev-name">
                      <Text
                        style={{
                          fontWeight: "500",
                          color: "black",
                          fontStyle: "italic",
                          fontSize: 15,
                        }}
                        type="secondary"
                      >
                        OPEN DEFECTS : {this.state.opendef}
                      </Text>
                      <br />
                    </div>
                    <div className="total-sev">
                      <span className="avatar-item">
                        <Badge
                          count={this.state.openHigh}
                          style={{ backgroundColor: "red" }}
                        >
                          <Avatar
                            style={{ color: "red", fontWeight: "bolder" }}
                            shape="circle"
                            icon="H"
                          />
                        </Badge>
                      </span>
                      <span className="avatar-item">
                        <Badge
                          count={this.state.openMedium}
                          style={{ backgroundColor: "#faad14" }}
                        >
                          <Avatar
                            style={{ color: "#faad14", fontWeight: "bolder" }}
                            shape="circle"
                            icon="M"
                          />
                        </Badge>
                      </span>
                      <span className="avatar-item">
                        <Badge
                          count={this.state.openLow}
                          style={{ backgroundColor: "#237804" }}
                        >
                          <Avatar
                            style={{ color: "green", fontWeight: "bolder" }}
                            shape="circle"
                            icon="L"
                          />
                        </Badge>
                      </span>
                    </div>
                  </div>
                </Col>
                <Col span={6}>
                  <div className="sev-box">
                    <div className="sev-name">
                      <Text
                        style={{
                          fontWeight: "500",
                          color: "black",
                          fontStyle: "italic",
                          fontSize: 15,
                        }}
                        type="secondary"
                      >
                        NEW DEFECTS : {this.state.newdef}
                      </Text>
                      <br />
                    </div>
                    <div className="total-sev">
                      <span className="avatar-item">
                        <Badge
                          count={this.state.newHigh}
                          style={{ backgroundColor: "red" }}
                        >
                          <Avatar
                            style={{ color: "red", fontWeight: "bolder" }}
                            shape="circle"
                            icon="H"
                          />
                        </Badge>
                      </span>
                      <span className="avatar-item">
                        <Badge
                          count={this.state.newMedium}
                          style={{ backgroundColor: "#faad14" }}
                        >
                          <Avatar
                            style={{ color: "#faad14", fontWeight: "bolder" }}
                            shape="circle"
                            icon="M"
                          />
                        </Badge>
                      </span>
                      <span className="avatar-item">
                        <Badge
                          count={this.state.newLow}
                          style={{ backgroundColor: "#237804" }}
                        >
                          <Avatar
                            style={{ color: "green", fontWeight: "bolder",}}
                            shape="circle"
                            icon="L"
                          />
                        </Badge>
                      </span>
                    </div>
                  </div>
                </Col>
                <Col span={6}>
                  <div className="sev-box">
                    <div className="sev-name">
                      <Text
                        style={{
                          fontWeight: "500",
                          color: "black",
                          fontStyle: "italic",
                          fontSize: 15,
                        }}
                        type="secondary"
                      >
                        TOTAL DEFECTS : {this.state.data}
                      </Text>
                    </div>
                    <div className="total-sev">
                      <span className="avatar-item">
                        <Badge
                          count={this.state.high}
                          style={{ backgroundColor: "red" }}
                        >
                          <Avatar
                            style={{ color: "red", fontWeight: "bolder" }}
                            shape="circle"
                            icon="H"
                          />
                        </Badge>
                      </span>
                      <span className="avatar-item">
                        <Badge
                          count={this.state.medium}
                          style={{ backgroundColor: "#faad14" }}
                        >
                          <Avatar
                            style={{ color: "#faad14", fontWeight: "bolder" }}
                            shape="circle"
                            icon="M"
                          />
                        </Badge>
                      </span>
                      <span className="avatar-item">
                        <Badge
                          count={this.state.low}
                          style={{ backgroundColor: "#237804" }}
                        >
                          <Avatar
                            style={{ color: "green", fontWeight: "bolder" }}
                            shape="circle"
                            icon="L"
                          />
                        </Badge>
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <ViewDefect />
        <AddDefect />
        <UpdateDefect />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  defect: state.ReducerDefect.defect
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    viewDefectAddDrawerForm: () => { dispatch(viewDefectAddDrawerForm()) },
    fetchdefect: () => { dispatch(fetchdefect()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(defect)
