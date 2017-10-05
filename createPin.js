
function createPin(pinData) {

	var link = pinData.link;
	var pic = pinData.images.orig.url;
	var title = pinData.pin_join.visual_annotation[0];
	var description = pinData.description;
	var pinCount = pinData.repin_count;
	var pinner = pinData.pinner.full_name;
	var pinnerPic = pinData.pinner.image_small_url;

	var result = `	
			  <div class="item">
			    <div class="img-responsive">
			    <a href=${link} class="thumbnail">
			      <img src=${pic} alt="..." class="pic">
			    </a>
			      <div class="caption row">
			      	<h4 class="title">${title}</h4>
			        <p class="col-md-8">${description}</p>
			        <p class="col-md-4 pinCount"><img src="./assets/pin.png">${pinCount}</p>
			      </div>
			      <div class="pinner row">
			      <p><img src=${pinnerPic} alt="..." class="img-circle pinner-pic"> ${pinner} </p>
			      </div>
			    </div>
			  </div>
			`
	return result;
}

