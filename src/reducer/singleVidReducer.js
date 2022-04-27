const singleVidReducer = (state, action) => {
    switch(action.type){
        case "GO_TO_SINGLE_VID_PAGE":
            return {...state,
            vidItem:action.payload,
            }
        default:
            return state
    }
};

export { singleVidReducer };
