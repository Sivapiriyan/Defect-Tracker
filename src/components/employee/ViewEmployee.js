import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import {viewUpdateDrawerForm,fetchemployee} from '../../components/redux/action/ActionEmployee';
import { Table, Input, Button, Space, Tag,Spin } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined,EditOutlined,FolderViewOutlined} from "@ant-design/icons";
import "antd/dist/antd.css";

export class ViewEmployee extends Component {   

  constructor(props) {
    super(props);
    this.state = { 
      searchText: "",
      searchedColumn: "",
      visible: false,      
      show:false, 
      sortedInfo:null,
      filteredInfo:null,
      loading:true,

         
    };
  }  
  componentWillMount() {
    this.props.fetchemployee();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.employees) {
      this.setState({ loading:false});
    }
  }    
  
  filterHandleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
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
          placeholder={`Search`}
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
        dataIndex: "employeeId",
        width: "1%",
        key: "employeeId",
        sorter: (a, b) => a.defectsId - b.defectsId,
        defaultSortOrder: "descend",
        sortDirections: ["descend", "ascend"],
      },
      {
        title: "First Name",
        dataIndex: "employeeFirstName",
        key: "employeeFirstName",
        ...this.getColumnSearchProps("employeeFirstName"),
      },
      {
        title: "Last Name",
        dataIndex: "employeeLastName",
        key: "employeeLastName",
        ...this.getColumnSearchProps("employeeLastName"),
      },     
      {
        title: "Email",
        dataIndex: "employeeEmail",
        key: "employeeEmail",
        ...this.getColumnSearchProps("Email"),
      },    
      {
        title: "Mobile Number",
        dataIndex: "employeeMobileNumber",
        key: "employeeMobileNumber",
        ...this.getColumnSearchProps("Mobile Number"),
      },
      {
        title: "Department",
        dataIndex: "employeeDepartment",
        key: "employeeDepartment",
        filters: [
          {
            text: "Developer",
            value: "Developer",
          },
          {
            text: "QA",
            value: "QA",
          },          
        ],
        filterMultiple: false,
        filteredValue: filteredInfo.employeeDepartment || null,
        onFilter: (value, record) => record.employeeDepartment.includes(value),
      },
      {
        title: "Position",
        dataIndex: "employeePosition",
        key: "employeePosition",
        filters: [
          {
            text: "Associate",
            value: "Associate",
          },
          {
            text: "Lead",
            value: "Lead",
          },          
        ],
        filterMultiple: false,
        filteredValue: filteredInfo.employeePosition || null,
        onFilter: (value, record) => record.employeePosition.includes(value),
      }, 
      {
        title: "Edit",        
        key: "edit",
        render: (record) => (
          <a onClick={() => this.props.viewUpdateDrawerForm(record)}>
            <EditOutlined />
          </a>
        ),
      },
      {
        title: "View",
        key: "view",
        render: (viewRecord = this.state.selectedRows) => (
          <a onClick={() => this.employeeView(viewRecord)}>
            <FolderViewOutlined style={{ color: "red" }} />
          </a>
        ),
      },  
    ];
    
    return (
      <Fragment>
        <div>    
        <Spin tip="Loading..." spinning={this.state.loading}>
          <Table columns={columns} dataSource={this.props.employees} onChange={this.filterHandleChange}/>          
        </Spin>
        </div>        
      </Fragment>
    );
    }
}
const mapStateToProps = state => ({
  employees: state.ReducerEmployee.employees, 

});
const mapDispatchToProps = (dispatch, ownProps) => {
  return {    
      fetchemployee: () => { dispatch(fetchemployee()) },  
      viewUpdateDrawerForm:(record)=>{dispatch(viewUpdateDrawerForm(record))},          
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewEmployee);
