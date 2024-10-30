function clonearray(array) {

    const clone = [...array];

    return clone;
}

const originalarray = [1,2,3,[4,3,5],5];

const clonedarray = clonearray(originalarray);

console.log(clonedarray);
