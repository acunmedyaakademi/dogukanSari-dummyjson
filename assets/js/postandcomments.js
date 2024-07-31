function createHtml(cemilOlabilirMi, suat) {
 return `<div class="postItem">
        <h1 id="title">${cemilOlabilirMi.title}</h1>
        <p id="body">${cemilOlabilirMi.body}</p>
        <ul id="commentList">
          <p>${suat.user.fullName} commented on your post: <span>${suat.body}</span></p>       
        </ul>
      </div>`;
}


async function getData(postId) {
  let post = await fetch('https://dummyjson.com/post/' + postId).then(res => res.json());
  let {comments} = await fetch(`https://dummyjson.com/post/${postId}/comments`).then(res => res.json());

  for(let i=0; i<31; i++) {
    postList.innerHTML += createHtml(post, comments[i]); 
  }
}

for(let i=0; i<31; i++) {
  getData(i);
}

