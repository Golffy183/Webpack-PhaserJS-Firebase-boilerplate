export const  helperResponse = (promiseAPI: any) => {
    return promiseAPI.then((res:any) => {
        return {res:res, error: null};
    }).catch((error: any) => {
        return {res: null, error: error};
    });
}

export default helperResponse;