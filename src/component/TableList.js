import React from 'react';
import {fixFormStatus} from '../actions/listWork';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

var id;
var work;
var status=1;
const TableList=(props)=>{
    var ListWork=props.WorkList;
    const fixStatus=useSelector(state=>state.listWorkReducer.fixStatus);
    const dispatch=useDispatch();

    function deleteItem(item)
    {
        props.item(item);
    } 
    
    const handleChange=(index,event)=>
    {
        const target=event.target;
        const name=target.name;
        const value=target.value;
        if (name==='work'  && value !==work){work=value}
        if (name==='status'  && Number(value) !==Number(status))
        {
            status=Number(value);
        }
        
    }
    
    const changeFixStatus=(index)=>
    {
        if (fixStatus===true)
        {
            props.fix(index,{work:work,status:status});
        }
        work=ListWork[index].work;
        status=1;
        id=index;      
        dispatch(fixFormStatus());
    }
    const ShowList=ListWork.map((item,index)=>{
        return (
            <tr className={item.status===1?"table-primary":"table-secondary"} key={index}>
                <td>{index+1}</td>
                {fixStatus && Number(index)===Number(id)?
                    <td>
                        <input 
                        type="text" 
                        className="form-control" 
                        name="work" 
                        onChange={(e)=>handleChange(index,e)}
                        placeholder={item.work}/>
                    </td>:
                    <td>{item.work}</td>                 
                }
                {fixStatus && Number(index)===Number(id)?
                    <td>
                        <select 
                            className="form-control" 
                            name="status"
                            onChange={(e)=>handleChange(index,e)}>
                            <option value={1}>Quan trọng</option>
                            <option value={0}>Không quan trọng</option>
                        </select>
                    </td>:
                    <td>{item.status===1?"Quan trọng":"Không quan trọng"}</td>
                    
                }
                <td>
                    <button type="button" className="btn btn-warning  btn-sm" onClick={()=>changeFixStatus(index)}>{fixStatus && Number(index)===Number(id)?"Đồng ý":"Sửa"}</button>
                    <button type="button" className="btn btn-danger  btn-sm setting" onClick={()=>deleteItem(index)}>Xóa</button>
                </td>
            </tr> 
        )
    })
    return (
        <tbody>
            {ShowList}
        </tbody>
    )
}

export default TableList