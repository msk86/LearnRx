function rxWrapper(reactiveData) {
    const observables = reactiveData.map(rd => {
        return {
            fromEvent(dom, event) {
                return rd;
            }
        }
    });

    return observables.concat([{}]);
}

export default rxWrapper;
