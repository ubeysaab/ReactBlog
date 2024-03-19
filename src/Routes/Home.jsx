import React from 'react'
import Feed from "../Components/Feed"
function Home({posts}) {
  return (
    <main className="Home">
      {
        posts.length ? (
          <Feed posts={posts}/>
        ):(
            <p>
              there is no thing to show 
            </p>
        )
      }
    </main>
  )
}

export default Home