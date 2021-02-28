import { assignIn } from 'lodash';

const initialState={
    addButton:false
}
const addFormReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_FORM": {
            console.log(state)
            return assignIn(state, { addButton: !state.addButton });
        }
        default:
            return state;
    }
};
export default addFormReducer;