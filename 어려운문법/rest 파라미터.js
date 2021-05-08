function getData(...rest) {
    let [item1, item2, item3, item4, item5] = rest;
    console.log(item1, item2);
}

getData(1, 2, 3, 4, 5);