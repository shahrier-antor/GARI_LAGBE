const initialData = {
    loading : false
};
// to show loading while fetching data from backend
export const alertsReducer=(state=initialData , action)=>{

    switch(action.type)
    {
          case 'LOADING' : {
              return{
                  ...state,
                  loading : action.payload
              }
          }

          default : return state
    }

}