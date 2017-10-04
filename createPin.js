
function createPin(pinData) {

	var link = pinData.link;
	var pic = pinData.images.orig.url;
	var description = pinData.description;
	var pinCount = pinData.repin_count;
	var pinner = pinData.pinner.full_name;
	var pinnerPic = pinData.pinner.image_small_url;

	var result = `	
			 <div class="row">
			  <div class="col-sm-6 col-md-4">
			    <div class="thumbnail">
			    <a href=${link} class="thumbnail">
			      <img src=${pic} alt="...">
			    </a>
			      <div class="caption">
			        <p>${description}</p>
			      </div>
			      <div class="pincount">
			      	<p>${pinCount}</p>
			      </div>
			      <div class="pinner">
			      <p>${pinner}</p><img src=${pinnerPic} alt="...">
			      </div>
			    </div>
			  </div>
			</div>
			`
	return result;
}