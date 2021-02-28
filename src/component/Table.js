import React from 'react'
import TableList from './TableList.js'

const table=(props)=>{
    function deleteItem(item)
    {
        props.index(item);
    }

    function fixItem(index,item)
    {
      props.fix(index,item);
    }
    return (
        <table className="table list">
            <thead>
              <tr>
                <th>STT</th>
                <th>Công việc</th>
                <th>Trạng thái</th>
                <th>Điều chỉnh</th>
              </tr>
            </thead>
            <TableList WorkList={props.work} item={deleteItem} fix={fixItem}/>
          </table>
    )
}
export default table