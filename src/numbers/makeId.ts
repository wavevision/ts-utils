const makeId = (): number => Math.floor(new Date().valueOf() * Math.random());

export default makeId;
