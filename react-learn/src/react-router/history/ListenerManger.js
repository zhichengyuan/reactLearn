export default class ListenerManager {
    //存放监听器的数组
    listeners = [];

    /**
     * 添加一个监听器，返回一个用于取消监听的函数
     * @param {*} listener 
     */
    addListener(listener) {
        this.listeners.push(listener);
        const index = this.listeners.length -1;//新加入的监听器的下标
        const unListen = () => {
            this.listeners.indexOf(listener)
            this.listeners.splice(index,1);
        }
        console.log(this.listeners)
        return unListen;
    }

    /**
     * 触发所有的监听器
     * @param {*} location 
     * @param {*} action 
     */
    triggerListener(location,action) {
        for(const listener of this.listeners) {
            listener(location,action);
        }
    }
}