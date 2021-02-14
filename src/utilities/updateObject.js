export const updateObject = (oldState, updatedProperties) => {
    return {
        ...oldState,
        ...updatedProperties,
    };
};

export const deepCloneObject = (oldState, updatedProperties) => {
    const cloneObject = JSON.parse(JSON.stringify(updatedProperties));
    return cloneObject;
};
