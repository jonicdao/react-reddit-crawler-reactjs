import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

function Reddit() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    axios.get(`http://www.reddit.com/r/reactjs.json`)
    .then(res => {
      const newPosts = res.data.data.children
      .map(obj => obj.data);

      setPosts(newPosts);
    });
  }, []);

  return (
    <div>
      <h1>/r/reactjs</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}><a href={`http://www.reddit.com${post.permalink}`}>{post.title}</a>
          <br />
         Score: {post.score} Author: {post.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<Reddit />, document.getElementById("root"))