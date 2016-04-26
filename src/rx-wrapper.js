function rxWrapper(reactiveData) {
    return reactiveData.map(rd => {
        return {
            listeners: {},
            addEventListener(event, listener) {
                this.listeners[`${event}:${listener.toString()}`] = rd.subscribe(listener);
            },
            removeEventListener(event, listener) {
                const subscription = this.listeners[`${event}:${listener.toString()}`];
                subscription && subscription.dispose();
            }
        }
    });
}

export default rxWrapper;
