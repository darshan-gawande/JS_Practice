// An Object copy function

const copy = (obj) => {
    const copy1 = Object.create(Object.getPrototypeOf(obj));
    const proto_Name = Object.getOwnPropertyNames(obj);
    proto_Name.forEach((x) => {
        const desc = Object.getOwnPropertyDescriptor(obj,x);
        const a = Object.defineProperty(copy1, x, desc);
        console.log(a);

    });
    return copy1;
}

const o1 = {
    a : 1,
    b : 2,
};

(copy(o1));