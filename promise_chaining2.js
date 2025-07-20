function job(state) {
  return new Promise((resolve, reject) => {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}
/*
let promise = job(true);

promise
  .then((data) => {
    console.log(data); // success
    return job(false);
  })
  .catch((err) => {
    console.log(err); // prints the error here

    return "Error caught"; // it is treated as true
  })
  .then((data) => {
    console.log(data); // successs
    return job(true); // since , there is then ahead, we will not get the result for this
  })
  .catch((err) => {
    console.log(err);
  });
*/

/*
  so, the output is : 
  success 
  error 
  error caught 
  */

/*
let promise = job(true);
promise
  .then((data) => {
    console.log(data); // success
    return job(true);
  })
  .then((data) => {
    if (data !== "victory") {
      throw "defeat"; // throw here returns an error due to that throw keyword, so it will go to catch block
    }
    return job(true);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err); // prints Defeat
    return job(false); // goes to next catch block for error
  })
  .then((data) => {
    console.log(data);
    return job(true);
  })
  .catch((err) => {
    console.log(err);
    return "Error Caught";
  })
  .then((data) => {
    console.log(data); // Error Caught
    return new Error("test"); // a normal test string it is
  })
  .then((data) => {
    console.log("success: ", data.message); //success --> test
  })
  .catch((data) => console.log(data));
*/

// promise chaining output based question
const firstPromise = new Promise((resolve, reject) => {
  resolve("first");
});
const secondPromise = new Promise((resolve, reject) => {
  resolve(firstPromise);
});

secondPromise
  .then((res) => {
    return res; // it returns firstPromise
  })
  .then((res) => console.log(res));

/* 
  here, we are resolving firstPromise with message - first and then we are returning that promise from the secondPromise
  so, when we attach a callback to secondPromise, it returns another Promise which actually prints something
  */

// convert below code snippet into async/await instead of fetch and catch

function loadJson(url) {
  return fetch(url).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  });
}

// with async and await
async function loadJson2(url) {
  const response = await fetch(url);
  if (response.status === 200) {
    const json = response.json();
    return json;
  } else {
    throw new Error(response.status);
  }
}
loadJson("https://api.github.com/users/shelkeom230").catch((err) =>
  console.log(err)
);
