/**
 * 将一个location对象，转换为字符串连接
 * @param {*} location 
 */
export function parseLocation(location,history) {
    // const {pathname,search,hash,state} = location;
    return history.createHref(location);

}