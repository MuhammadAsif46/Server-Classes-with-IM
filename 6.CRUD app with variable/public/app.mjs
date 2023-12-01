window.createPost = function () {

  let postTitle = document.querySelector("#postTitle").value;
  let postText = document.querySelector("#postText").value;

  // baseUrl/api/v1/post
  axios.post(`/api/v1/post`, {
      title: postTitle,
      text: postText
  })
      .then(function (response) {
          console.log(response.data);
          document.querySelector("#result").innerHTML = response.data;
          getAllPost();
      })
      .catch(function (error) {
          // handle error
          console.log(error.data);
          document.querySelector("#result").innerHTML = "error in post submission"
      })
}


window.getAllPost = function () {


  // baseUrl/api/v1/post
  axios.get(`/api/v1/posts`)
      .then(function (response) {
          console.log(response.data);


          let postsHtml = ``

          response.data.map((eachPost) => {
              postsHtml +=
                  `<div id='card-${eachPost.id}' class="post-card">
                      <h3>${eachPost.title}</h3>
                      <p> ${eachPost.text} </p>
                      <button onclick="delPost('${eachPost.id}')">Delete</button>
                      <button onclick="editPost('${eachPost.id}','${eachPost.title}','${eachPost.text}', )">Edit</button>
                  </div> 
                  <br />`
          })


          document.querySelector("#posts").innerHTML = postsHtml
      })
      .catch(function (error) {
          // handle error
          console.log(error.data);
          document.querySelector("#result").innerHTML = "error in post submission"
      })
}


window.delPost = function (postId) {

  console.log("delete: ", postId);


  // baseUrl/api/v1/post
  axios.delete(`/api/v1/post/${postId}`)
      .then(function (response) {
          console.log(response.data);

          getAllPost();
      })
      .catch(function (error) {
          // handle error
          console.log(error.data);
          document.querySelector("#result").innerHTML = "error in post submission"
      })
}


window.editPost = (postId, title, text) => {

  console.log("delete: ", postId);

  document.querySelector(`#card-${postId}`).innerHTML =
      `<form onsubmit="savePost('${postId}')">
          title: <input type='text' value='${title}' id='title-${postId}' />
          <br/>
          text: <input type='text' value='${text}' id='text-${postId}' />
          <br/>
          <button>Save</button>

      </form>`
}


window.savePost = (postId)=>{
  const updatedTitle = document.querySelector(`#title-${postId}`).value;
  const updatedText = document.querySelector(`#text-${postId}`).value;

  axios.put(`/api/v1/post/${postId}`, {
      title: updatedTitle,
      text: updatedText
  })
      .then(function (response) {
          console.log(response.data);
      })
      .catch(function (error) {
          // handle error
          console.log(error.data);
          document.querySelector("#result").innerHTML = "error in post submission"
      })

}