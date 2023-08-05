export const SERVICE_URLS={
    userSignup: { url: '/signup', method: 'POST' } // post because in our router.ts file in server , we have set so
    ,userLogin:{url:"/login", method: 'POST'},
    upload:{url:"/file/upload", method: 'POST'},
    submit:{url:"/submit", method: 'POST'},
    directUpload:{url:'/uploadDirect', method: 'POST'},
    seePosts:{url:"/seePosts", method: 'POST'},
    detailView:{url:"/detailView", method: 'POST'},
    

    
}
