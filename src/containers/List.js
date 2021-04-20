import React from 'react';
import { connect } from 'react-redux';
import {
  getListData,
  setListData,
  addListData,
  updateListData,
  deleteListData,
  setApiListData,
} from '../redux/List/ListActionCreators';

const List = (props) => {
  // console.log('props', props.list);
  return (
    <div>
      <h1>LIST</h1>
      <div>
        <div>
          <input
            type='text'
            placeholder='Add Task'
            value={props.list.inputText}
            onChange={(e) => props.addListData(e.target.value)}
          />
          <button
            onClick={() => props.setListData()}
            style={{ marginLeft: '5px' }}
          >
            {props.list.id ? 'Update' : 'ADD'}
          </button>
          <button
            onClick={() => props.setApiListData()}
            style={{ marginLeft: '5px' }}
          >
            API CALL
          </button>
        </div>
        <div>
          {props.list.error && (
            <span
              style={{
                marginRight: '9%',
                fontSize: '12px',
                color: 'red',
                marginTop: '10px',
              }}
            >
              {props.list.error?.message}
            </span>
          )}
        </div>
      </div>
      <div>
        {props.list.list &&
          props.list.list.map((data, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                padding: '20px',
                margin: '0.5% 20% 0% 20%',
                backgroundColor: '#0047',
                borderRadius: '5px',
              }}
            >
              <div>{data.name}</div>
              <div style={{ marginLeft: 'auto' }}>
                <button
                  style={{ marginLeft: 'auto', marginRight: '5px' }}
                  onClick={() => props.updateListData(index)}
                >
                  Update
                </button>
                <button onClick={() => props.deleteListData(index)}>
                  delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

// ... computed data from state and optionally ownProps
const mapStateToProps = (state) => {
  return {
    list: state.ListReducer,
  };
};

// ... normally is an object full of action creators
const mapDispatchToProps = {
  getListData,
  setListData,
  addListData,
  deleteListData,
  updateListData,
  setApiListData,
};

//`connect` returns a new function that accepts the component to wrap:
//and that function returns the connected, wrapper component.
export default connect(mapStateToProps, mapDispatchToProps)(List);
