import { ActionTree, createStore, GetterTree, MutationTree, Store, StoreOptions } from 'vuex';
declare interface numberStatus {

    key:string;

}
const status=createStore({
    state:{
        counter:0,
    },
    getters:{},
    mutations:{
        changeValue(state:any,count:number,){
            state.counter=count;
          
        }
    },
    actions:{},
    modules:{}
})
export default status