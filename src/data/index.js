// Function to cool down request
const randomDelayPromise = data => {
  const delay = Math.floor(Math.random * 400) + 100;
  return new Promise(resolve => setTimeout(() => resolve(data), delay));
};

export const getDBdata = () => {
  return randomDelayPromise(require('./servers.json'));
};
