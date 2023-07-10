///call backs

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

function createPost(post,callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 3000);
}
//getPosts();
createPost({ title: "post 4", body: "this is post 4" },getPosts);
