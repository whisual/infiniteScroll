import React from 'react'

const infinitescroll = ({response}) => {
  return (
    <div>
      <h1>Infinite Scroll</h1>
      {
        response.map((resp, index)=>(
            <div key={index}>
                <h1>Title : {resp.title}</h1>
            </div>
        ))
      }
    </div>
  )
}

export default infinitescroll
