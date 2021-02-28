const initialState={
    addButton:false
}
const addFormReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_FORM":{
            const newAddButton=!state.addButton;
            state.addButton=newAddButton;
            return state;
        }
        default:
            return state;
    }
};
export default addFormReducer;