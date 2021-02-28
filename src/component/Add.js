import React from 'react'

const AddWork=(props)=>{

    function handleSubmit(event)
    {      
        props.change(work,status);
        event.preventDefault(); 
    }

    var work="";
    var status=1;
    function handleChange(event){
        const target=event.target;
        const name=target.name;
        const value=target.value;
        
        name==='work'? work=value:status=value;
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Công việc:</label>
            <input 
                type="text" 
                className="form-control" 
                name="work" 
                placeholder="Hãy nhập vào công việc"
                onChange={handleChange}
            />
            <label>Trạng thái</label>
            <select 
                className="form-control" 
                name="status"
                onChange={handleChange}>
              <option value={1}>Quan trọng</option>
              <option value={0}>Không quan trọng</option>
            </select>
            <button type="submit" className="btn btn-primary mt-100">Lưu</button>
        </form>
    )
}
export default AddWork