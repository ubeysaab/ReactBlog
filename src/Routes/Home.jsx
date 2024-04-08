import React from 'react'
import Feed from "../Components/Feed"
function Home({posts,isLoading,error}) {
  return (


<>

    <main className="Home">
      {isLoading ? <p>
        all posts are loading  now please wait a minute
      </p> :
        !isLoading&& posts.length ? (
          <Feed posts={posts}/>
        ):(
            <p>
              {error}
            </p>
        )
      }
    </main>


</>
  )
}

export default Home