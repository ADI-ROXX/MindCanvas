
export const getAccessToken =()=>{
    try{

    const accessToken=sessionStorage.getItem("accessToken");

    return accessToken;
    } catch(e){
        return "error";
    }

}