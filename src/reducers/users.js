const users = (state = {}, action) => {
  let new_state;
  switch (action.type) {
    case 'SHOW_DELETE_MODAL':
      console.log("Old State: ", state);
      new_state = JSON.parse(JSON.stringify(state));
      new_state.modal = new_state.modal ? new_state.modal : {};
      new_state.modal.delete_list = {
        show: true,
        id: action.id,
        name: action.name
      };
      console.log("New State: ", new_state);
      return new_state;
      // state = [
      //   ...state,
      //   {
      //     modal: state.modal ? state.modal : {},
      //     "modal.delete_list": {
      //       show: true,
      //       id: action.id,
      //       name: action.name
      //     }
      //   }
      // ];
      // break;
    case 'HIDE_DELETE_MODAL':
      new_state = JSON.parse(JSON.stringify(state));
      new_state.modal.delete_list = {
        show: false,
        id: 0,
        name: ''
      };
      return new_state;
    case 'DELETE_USER':
      new_state = JSON.parse(JSON.stringify(state));
      for(const index in new_state.list){
        if(new_state.list[index].id === action.id){
          new_state.list.splice(index, 1);
          break;
        }
      }
      return new_state;
    default:
      return state;
  }
};

export default users;
