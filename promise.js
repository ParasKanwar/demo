const bringBread = (rupees) => {
  return new Promise((resolve, reject) => {
    if (isBreadAvailable(rupees)) {
      resolve("bread available");
    } else {
      reject(new Error("little money"));
    }
  });
};

function isBreadAvailable(rupees) {
  if (rupees > 10) {
    return true;
  }
  return false;
}

bringBread(9)
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e);
  });
