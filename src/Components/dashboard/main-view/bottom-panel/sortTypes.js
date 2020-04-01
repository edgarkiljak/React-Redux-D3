const sortTypes = {
  Up: {
    fn: {
      age: (a, b) => (a.age > b.age ? -1 : a.age > b.age ? 1 : 0),
      status: (a, b) => (a.status > b.status ? 1 : -1),
      name: (a, b) => {
        return a.name < b.name ? 1 : -1;
      }
    }
  },
  Down: {
    fn: {
      age: (a, b) => (a.age < b.age ? -1 : a.age > b.age ? 1 : 0),
      status: (a, b) => (a.status < b.status ? 1 : -1),
      name: (a, b) => {
        return a.name > b.name ? 1 : -1;
      }
    }
  }
};

export default sortTypes;
