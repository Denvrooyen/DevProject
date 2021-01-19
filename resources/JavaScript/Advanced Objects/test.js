let tempObj = {
    _num: 22,
    get num() {
        return this._num;
    }
};

console.log(tempObj._num);