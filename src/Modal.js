import React from 'react'

function Modal() {
  return (
    <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
    <video width="500" height="500" controls>
            <source src={require('./video/video.mp4')} type="video/mp4"></source>
              
                Your browser does not support the video tag.
              </video>
    </div>
  </div>
</div>
  )
}

export default Modal