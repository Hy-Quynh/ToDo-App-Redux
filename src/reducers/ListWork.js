const initialState={
    work: localStorage && localStorage.getItem("ws") ? JSON.parse(localStorage.getItem("ws")):[],
    fixStatus:false
}

const listWorkReducer=(state=initialState, action)=>{
    switch(action.type){
        case("ADD_WORK"): {
            const newWork=[...state.work];
            newWork.push(action.work);
            localStorage.setItem('ws', JSON.stringify(newWork));
            return {
                ...state,
                work: newWork,
            }
        }
        case("DELETE_WORK"): {
            const newWork=[...state.work];
            newWork.splice(action.item,1);
            localStorage.setItem('ws', JSON.stringify(newWork));
            console.log('bbbb');
            return {
                ...state,
                work: newWork,
            }
        }
        case("FIX_ITEM"):{
            const newFixStatus=!state.fixStatus;
            return{
                ...state,
                fixStatus:newFixStatus,
            }
        }
        case("FIX_FORM"):{
            const newWork=[...state.work];
            newWork.splice(action.item,1);
            newWork.splice(action.item,0,action.work);
            localStorage.setItem('ws', JSON.stringify(newWork));
            return{
                ...state,
                work:newWork,
            }
        }
        case ("A_TO_Z"):{
            const NewValue=[...state.work];
            NewValue.sort((a, b) => a.work.localeCompare(b.work));
            return{
                ...state,
                work:NewValue,
            }
            
        }
        case ("Z_TO_A"):{
            const NewValue=[...state.work];
            NewValue.sort((a, b) => b.work.localeCompare(a.work));
            return{
                ...state,
                work:NewValue,
            }
            
        }
        case ("SORT_IMPORTANT"):{
            const NewValue=[...state.work];
            const result1 = NewValue.filter((item) => Number(item.status) ===1);
            const result2 = NewValue.filter((item) => Number(item.status) ===0);
            const result=result1.concat(result2);
            return{
                ...state,
                work:result,
            }
        }
        case ("SORT_NOT_IMPORTANT"):{
            const NewValue=[...state.work];
            const result1 = NewValue.filter((item) => Number(item.status) ===1);
            const result2 = NewValue.filter((item) => Number(item.status) ===0);
            const result=result2.concat(result1);
            return{
                ...state,
                work:result,
            }
        }
        case ("FIND_TEXT"):{
            let NewValue=JSON.parse(localStorage.getItem("ws"));
            let result1 = NewValue.filter((item) => item.work.toUpperCase().search(action.text.toUpperCase()) >=0);
            return{
                ...state,
                work:result1,
            }
        }
        case ("BACK_HOME"):{
            let NewValue=JSON.parse(localStorage.getItem("ws"));
            return{
                ...state,
                work:NewValue,
            }
        }
        default: {
            return state;
        }
    }
}
export default listWorkReducer;