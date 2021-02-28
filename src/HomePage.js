import React from 'react'
import Table from './component/Table.js'
import AddWork from './component/Add';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {addForm} from './actions/addForm';
import { addWork } from './actions/listWork';
import { deleteWork } from './actions/listWork';
import {fixForm} from './actions/listWork';
import {sortAToZ} from './actions/listWork';
import {sortZToA} from './actions/listWork';
import {sortImportant} from './actions/listWork';
import {sortNotImportant} from './actions/listWork';
import {find} from './actions/listWork';
import {goBackHome} from './actions/listWork';
var findText="";
function HomePage() {
  
  const addButton=useSelector(state=>state.addFormReducer.addButton);
  const works=useSelector(state=>state.listWorkReducer.work);
  
  const dispatch=useDispatch();
  function setAddForm()
  {
    const changeAddFormStatus=addForm()
    dispatch(changeAddFormStatus);
  }

  function handleSubmit(work,status)
  {
    const New={work:work,status:status};  
    dispatch(addWork(New));
  }

  function deleteItem(item)
  {
    dispatch(deleteWork(item));
  }

  function fixItem(index,item)
  {
    dispatch(fixForm(index,item));
  }

  function changeSortValue(event)
  {
    const value=event.target.value;

    if (Number(value)===1)
    {
      dispatch(sortImportant());
      
    }
    if (Number(value)===2)
    {
      dispatch(sortNotImportant());
    }
    if (Number(value)===3)
    {
      dispatch(sortAToZ());
    }
    if (Number(value)===4)
    {
      dispatch(sortZToA());
      
    }
  }
  function backHome()
  {
      dispatch(goBackHome());
  }
  function findChange(event)
  {
    const target=event.target;
    const name=target.name;
    const value=target.value;
    if (name==="find")  findText=value;
  }

  function findButtonClick()
  {
    dispatch(find(findText));
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <h1 className="text-center text-success">ToDo App</h1>
        </div>
      </div>
      <div className="row">
        {addButton&&
        
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 add">
            <button type="button" className="closeAdd btn bg-transparent" onClick={setAddForm}>    
              <i className="fas fa-window-close addIcon"></i>
            </button> 
            <AddWork change={handleSubmit}/>
          </div>
        }
        <div className={addButton?"col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8":"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"}>
          <div className="row">
            {!addButton &&
              <button type="button" className="btn btn-info btn-sm control" onClick={setAddForm}>
                Thêm công việc
              </button>
            }
            <select 
                  className="form-control col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 control" 
                  name="sort"
                  style={{marginLeft:'1%'}}
                  onChange={changeSortValue}>
                <option value={0}>Sắp xếp</option>
                <option value={1}>Quan trọng</option>
                <option value={2}>Không quan trọng</option>
                <option value={3}>{"A->Z"}</option>
                <option value={4}>{"Z->A"}</option>
            </select>
            <input 
                  className="form-control col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 control"
                  placeholder="Tìm kiếm"
                  style={{marginLeft:'1%'}}
                  onChange={findChange}
                  name="find"/>
            <button type="button" className="btn btn-info btn-sm control" onClick={findButtonClick}>
                Tìm kiếm
            </button>
            <button type="button" className="btn bg-transparent home" onClick={backHome}>    
              <i className="fas fa-home"></i>
            </button> 

          </div>
          <Table work={works} index={deleteItem} fix={fixItem}/>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
