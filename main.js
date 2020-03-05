function getRepos() {
  const myRequest = new XMLHttpRequest();

  myRequest.open('GET', 'https://jsonplaceholder.typicode.com/posts');
  myRequest.send();
  
  myRequest.onload = function() {
    const resData = JSON.parse(myRequest.response);
    const elList = document.getElementById('list');
    if(this.readyState === 4 && this.status === 200) {
      for (const post of resData){
        elList.innerHTML += post.title + "<br>";
      }
    } else {
      elList.innerHTML = "You Have Error";
    }
  }

  
  
}