import { createStore } from "redux";

export default createStore((state,action)=>{
    if(state === undefined){
        return {
            mode:'WELCOME',
            id:null,
            max_id:3,
            welcome:{title:'welcome',desc:'hello world'},
            topics: [
                {id:1, title:'html', desc:'html is ...'},
                {id:2, title:'css', desc:'css is ...'},
                {id:3, title:'node', desc:'node is ...'}
            ]
        }
    }

    let newState ={};
    if(action.type === 'WELCOME'){
        return newState = Object.assign({},state, {mode:'WELCOME', id:null});
    }
    if(action.type === 'READ'){
        return newState = {...state, mode:'READ', id:action.id};
    }
    if(action.type === 'CREATE'){
        return newState = Object.assign({...state}, {mode:'CREATE', id:null});
    }
    if(action.type === 'CREATE_PROCESS'){
        const newMaxId = state.max_id+1;
        const newTopics = [...state.topics];
        const newTopic = {id:newMaxId, title:action.title, desc:action.desc};
        newTopics.push(newTopic);


        return newState = Object.assign({},state,{topics:newTopics, max_id:newMaxId, mode:'READ', id:newMaxId})
    }
    if(action.type === 'UPDATE'){
        return newState = {...state, mode:'UPDATE'}
    }
    if(action.type === 'UPDATE_PROCESS'){
        const newTopics = [...state.topics];
        const newTopic = {id:state.id, title:action.title, desc:action.desc};
        for(let i=0;i<newTopics.length;i++){
            if(newTopics[i].id === state.id){
                newTopics[i] = newTopic;
                break;
            }
        }
        return newState = {...state, topics:newTopics, mode:'READ'}
    }
    if(action.type === 'DELETE_PROCESS'){
        const newTopics = state.topics.filter(item=> item.id !==state.id);
        return newState = {...state, topics:newTopics, mode:'WELCOME', id:null};
    }
    
    console.log(action,state,newState);
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());