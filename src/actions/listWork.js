export const listWork=()=>{return{type:"LIST_WORK"}};

export const addWork=(work)=>{
    return {
        type:"ADD_WORK",
        work
    }
};

export const deleteWork=(item)=>{
    return {
        type:"DELETE_WORK",
        item
    }
};

export const fixFormStatus=()=>{return {type:"FIX_ITEM"}};

export const fixForm=(item,work)=>{return{
    type:"FIX_FORM",
    item,
    work
}};

export const sortAToZ=()=>{return{type:"A_TO_Z"}};
export const sortZToA=()=>{return{type:"Z_TO_A"}};
export const sortImportant=()=>{return{type:"SORT_IMPORTANT"}};
export const sortNotImportant=()=>{return{type:"SORT_NOT_IMPORTANT"}};
export const find=(text)=>{return{
    type:"FIND_TEXT",
    text
}};
export const goBackHome=()=>{return{type:"BACK_HOME"}};
