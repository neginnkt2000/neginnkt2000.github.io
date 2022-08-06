window.onload = init;

function init(argument) {
	 alert('HelOOooo');
    let h = document.getElementById('avaz shodani');
	h.addEventListener('click', headerClick);
}


function headerClick() {
	let h = document.getElementById('avaz shodani');
	h.innerHTML = "you are flower!";
}

//---------------------------------------------------------------------------------------------click dokme taghiir matn----
 // window.onload = sevom;

 // function sevom () {
	// let btn = document.querySelector('#lolo');
	// btn.addEventListener('click', chaharom);
// }

// function chaharom() {
	// let h = document.querySelector('#part2');
	// h.innerHTML = "part 3";
// }



// Initialize and add the map--------------------------------------------------------------------------map----------------


function initMap() {
  // The location of Uluru
  const uluru = { lat:35.585390 , lng:53.366304  }; 
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;





// search --------------------------------------------------------------------------------saerch-------------------

window.onload=init;


function init() {
	let btns=document.getElementById('searchup');
	btns.addEventListener('click' , test1);


	
}
function  test1() {
	// alert(document.getElementById('input1').value)
	let url = "https://www.google.com/search?q=site+digikala.ir"+document.getElementById('input1').value;
	window.open(url);

	
}