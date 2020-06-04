const array1 = [{
  key: 'val1',
  key2: 'val2',
  name: 'prashant',
  mobile: 'xxxxxxxxxxx',
  gender: 'male'
}{
  key: 'twst',
  key2: 'twst2',
  name: 'psudep',
  mobile: '1111111',
  gender: 'female'
}{
  key: 'qeuu',
  key2: 'hello',
  name: 'sipu',
  mobile: '99999',
  gender: 'male'
}];

// Synchronous looping
function looping1(data) {
  data = data.map((i) => {
    i = {...i};
    return i;
  });
  return data;
}

// Asynchronous looping
function looping1(data) {
  const response = Promise.all(data.map(async(i) => {
    i = {...i};
    const val = await CalltoAnotherFunc(i.name);
    i.val = va;
    return i;
  }));
  return response;
}
