window.createPost = function () {
  let postTitle = document.querySelector("#postTitle").value;
  let postText = document.querySelector("#postText").value;

  // baseUrl/api/v1/post
  axios
    .post(`/api/v1/post`, {
      title: postTitle,
      text: postText
    })
    .then(function (response) {
      console.log(response.data);
      document.querySelector("#result").innerHTML = response.data;
      getAllPost();
      document.getElementById("form").reset();
    })
    .catch(function (error) {
      console.log(error.data);
      document.querySelector("#result").innerHTML = "error in post submittions";
    });
};
window.getAllPost = function () {
  // baseUrl/api/v1/post
  axios
    .get(`/api/v1/posts`)
    .then(function (response) {
      console.log(response.data);
      document.querySelector("#post").innerHTML = JSON.stringify(response.data);
    })
    .catch(function (error) {
      console.log(error.data);
      document.querySelector("#result").innerHTML = "error in post submittions";
    });
};
