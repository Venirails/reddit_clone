import React from 'react';
function Body() {
    return (
<div class="container-fluid pb-3">
    <div class="d-grid gap-3" style={{display:'grid', gridTemplateColumns: '2fr 1fr'}}>
      <div class="bg-dark border rounded-3">
        <br/><br/><br/><br/><br/>
      </div>
      <div class="card text-white bg-dark mb-3">
        <div class="card-header">Header</div>
        <div class="card-body">
            <h5 class="card-title">Dark card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
</div>
    </div>&nbsp;
    <div class="d-grid gap-3" style={{display:'grid', gridTemplateColumns: '2fr 1fr'}}>
      <div class="bg-dark border rounded-3">
        <br/><br/><br/><br/><br/>
      </div>
    </div>&nbsp;
    <div class="d-grid gap-3" style={{display:'grid', gridTemplateColumns: '2fr 1fr'}}>
      <div class="bg-dark border rounded-3">
        <br/><br/><br/><br/><br/>
      </div>
    </div>
</div>

    )

}


export default Body;