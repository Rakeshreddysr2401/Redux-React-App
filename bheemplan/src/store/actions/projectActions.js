export const createProject=(project)=>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        //make asycn code latter
        const firestore=getFirestore();
        firestore.collection('projects').add({
            ...project,authorFirstName:'Net',
            authorLastName:'Ninja',
            authorId:12345,
            createdAt:new Date()
        }).then(()=>{
            dispatch({type:"CREATE_PROJECT",project});
        }).caught((err)=>{
            dispatch({type:"CREATE_PROJECT_ERROR",err});
        })
        
    }
}