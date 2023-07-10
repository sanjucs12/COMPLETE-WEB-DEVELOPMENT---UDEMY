const posts = [
  { title: "post 1", body: "this is post 1" },
  { title: "post 2", body: "this is post 2" },
  { title: "post 3", body: "this is post 3" },
];

function getPosts() {
  setTimeout(() => {
    posts.forEach((post, index) => {
      console.log(`${post.title} and index is ${index}`);
    });
  }, 2000);
}

//creating a promise
function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = true;
      if (error) {
        resolve();
      } else {
        reject("something went wrong");
      }
    }, 2000);
  });
}
createPost({ title: "post 4", body: "this is post 4" })
  .then(getPosts)
  .catch((error) => {
    console.log(error);
  });
