import React, { Component, Fragment } from "react";
import {
  Table,
  Input,
  Button,
  Space,
  Tag,
} from "antd";
import Highlighter from "react-highlight-words";
import {
  SearchOutlined,
  EditOutlined,
  FolderViewOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import { fetchdefect,viewDefectUpdateDrawerForm} from '../redux/action/ActionDefect'
import { connect } from 'react-redux';


export class ViewDefectDetails extends Component {
  state = {
    selectedRows: [],
    filteredInfo: null,
    sortedInfo: null,
    searchText: "",
    searchedColumn: "",
    visible: false,
    data: ''
  };
  componentWillMount() {
    this.props.fetchdefect();
  }

  filterHandleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };
  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };
  getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
        <div style={{ padding: 8 }}>
          <Input
            ref={(node) => {
              this.searchInput = node;
            }}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={() =>
              this.handleSearch(selectedKeys, confirm, dataIndex)
            }
            style={{ width: 188, marginBottom: 8, display: "block" }}
          />
          <Space>
            <Button
              type="primary"
              onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
              icon={<SearchOutlined />}
              size="small"
              style={{ width: 90 }}
            >
              Search
          </Button>
            <Button
              onClick={() => this.handleReset(clearFilters)}
              size="small"
              style={{ width: 90 }}
            >
              Reset
          </Button>
          </Space>
        </div>
      ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: (text) =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
          text
        ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ searchText: "" });
  };

  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: "ID",
        width: "1%",
        dataIndex: "defectsId",
        key: "defectsId",
        sorter: (a, b) => a.defectsId - b.defectsId,
        defaultSortOrder: "descend",
        sortDirections: ["descend", "ascend"],
      },
      {
        title: "Defect Description",
        dataIndex: "defectsName",
        key: "defectsName",
        ...this.getColumnSearchProps("defectsName"),
      },
      {
        title: "Type",
        dataIndex: "type",
        key: "type",
        filters: [
          {
            text: "Functional",
            value: "Functional",
          },
          {
            text: "Performance",
            value: "Performance",
          },
          {
            text: "UI",
            value: "UI",
          },
        ],        
        filteredValue: filteredInfo.type || null,
        onFilter: (value, record) => record.type.includes(value),
      },
      {
        title: "Module",
        dataIndex: "module",
        key: "module",
        filterMultiple: false,
        ...this.getColumnSearchProps("module"),
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
        filters: [
          {
            text: "New",
            value: "New",
          },
          {
            text: "Open",
            value: "Open",
          },
          {
            text: "Fixed",
            value: "Fixed",
          },
          {
            text: "Closed",
            value: "Closed",
          },
          {
            text: "Re-open",
            value: "Re-open",
          },
          {
            text: "Postpone",
            value: "Postpone",
          },
        ],        
        filteredValue: filteredInfo.status || null,
        onFilter: (value, record) => record.status.includes(value),
        render: (value, record) => {
          switch (record.status) {
            case "New":
              return <Tag style={{ fontWeight: "bolder" }} color="#1890ff">New</Tag>;
            case "Open":
              return <Tag style={{ fontWeight: "bolder" }} color="#9e1068">Open</Tag>;
            case "Fixed":
              return <Tag style={{ fontWeight: "bolder" }} color="#7cb305">Fixed</Tag>;
            case "Closed":
              return <Tag style={{ fontWeight: "bolder" }} color="#ad8b00">Closed</Tag>;
            case "Re-open":
              return <Tag style={{ fontWeight: "bolder" }} color="#9254de">Re-open</Tag>;
            case "Postpone":
              return <Tag style={{ fontWeight: "bolder" }} color="#00474f">Postpone</Tag>;
            case "Reject":
              return <Tag style={{ fontWeight: "bolder" }} color="#ff4d4f">Reject</Tag>;
          }
        },
      },
      {
        title: "Severity",
        dataIndex: "severity",
        key: "severity",
        filters: [
          {
            text: "High",
            value: "High",
          },
          {
            text: "Medium",
            value: "Medium",
          },
          {
            text: "Low",
            value: "Low",
          },
        ],        
        filteredValue: filteredInfo.severity || null,
        onFilter: (value, record) => record.severity.includes(value),
        render: (value, record) => {
          switch (record.severity) {
            case "High":
              return <Tag color="red" style={{color:'blue'}}>High</Tag>;
            case "Medium":
              return <Tag color="orange">Medium</Tag>;
            case "Low":
              return <Tag color="green">Low</Tag>;
          }
        },
      },
      {
        title: "Priority",
        dataIndex: "priority",
        key: "priority",
        filters: [
          {
            text: "High",
            value: "High",
          },
          {
            text: "Medium",
            value: "Medium",
          },
          {
            text: "Low",
            value: "Low",
          },
        ],        
        filteredValue: filteredInfo.priority || null,
        onFilter: (value, record) => record.priority.includes(value),
        render: (value, record) => {
          switch (record.priority) {
            case "High":
              return <Tag color="red">High</Tag>;
            case "Medium":
              return <Tag color="orange">Medium</Tag>;
            case "Low":
              return <Tag color="green">Low</Tag>;
          }
        },
      },
      {
        title: "Entered By",
        dataIndex: "enteredBy",
        key: "enteredBy",
        ...this.getColumnSearchProps("enteredBy"),
      },
      {
        title: "Assign To",
        dataIndex: "assignTo",
        key: "assignTo",
        ...this.getColumnSearchProps("assignTo"),
      },
      {
        title: "Edit",
        // dataIndex: "view",
        key: "edit",
        render: (record = this.state.selectedRows) => (
          <a onClick={() =>this.props.viewDefectUpdateDrawerForm(record)}>
            <EditOutlined />
          </a>
        ),
      },
      {
        title: "View",
        key: "view",
        render: (viewRecord = this.state.selectedRows) => (
          <a onClick={() => this.onClickView(viewRecord)}>
            <FolderViewOutlined style={{ color: "red" }} />
          </a>
        ),
      },
    ];
    return (
      <Fragment>
        <br></br>
        <Table
          columns={columns}
          dataSource={this.props.defect}
          onChange={this.filterHandleChange}
        />
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  defect: state.ReducerDefect.defect,

});
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchdefect: () => { dispatch(fetchdefect())}, 
    viewDefectUpdateDrawerForm:(record)=>{dispatch(viewDefectUpdateDrawerForm(record))}  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewDefectDetails);
