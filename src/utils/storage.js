const storage = {
  set: (key, data, callback) => {
    localStorage.setItem(key, JSON.stringify(data));
    callback && callback();
  },
  get: (key) => {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
  },
  remove: (key, callback) => {
    localStorage.removeItem(key);
    callback && callback();
  },
}

export default storage;