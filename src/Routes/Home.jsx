import React, { useContext } from 'react'
import Feed from "../Components/Feed"
import DataContext from '../context/DataContext'
function Home() {
  const {searchResults ,isLoading,fetchError} = useContext(DataContext)


  return (

<>

    <main className="Home">
      {isLoading ? <p>
        all posts are loading  now please wait a minute
      </p> :
        !isLoading&& searchResults.length ? (
          <Feed posts={searchResults}/>
        ):(
            <p>
              {fetchError}
            </p>
        )
      }
    </main>


</>
  )
}

export default Home