const sortTypes = {
  Up: {
    fn: (a, b) => (a.age - b.age ? 1 : -1)
  },
  Down: {
    fn: (a, b) => (a - b ? 1 : -1)
  },
  Sort: {
    fn: (a, b) => 0
  }
};

export default sortTypes;
