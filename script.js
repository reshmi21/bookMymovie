const con=document.querySelector('.book-seat');
const mov=document.getElementById('movie-list');
const seat=document.querySelectorAll('.rows .seat:not(.occupied)');
//alert(seat.value)
const count=document.getElementById('count');
const price=document.getElementById('price');
populate();
let ticketPrice=+mov.value;
//alert(typeof(ticketPrice));
con.addEventListener('click',function(e)
{
	if(e.target.classList.contains('seat')&&!e.target.classList.contains('occupied'))
	{
		e.target.classList.toggle('selected');
		updateLength();
		
	}
	
		//updateLength(
});
mov.addEventListener('change',function(e)
{
	ticketPrice=e.target.value;
	setMovie(e.target.selectedIndex,e.target.value);
	updateLength();
});
	function setMovie(movieIndex,priceIndex)
	{
		localStorage.setItem('movie-name',JSON.stringify(movieIndex));
		localStorage.setItem('movie-price',JSON.stringify(priceIndex));
	}
	function populate()
	{
		selectedSeats=JSON.parse(localStorage.getItem('selectedSeats'));
		if(selectedSeats!==''&&selectedSeats.length>0)
		{
			seat.forEach((num,index)=>
			{
				if(selectedSeats.indexOf(index)>-1)
					num.classList.add('selected');
			});
		}
		const selectedMovie=JSON.parse(localStorage.getItem('movie-name'));
		if(selectedMovie!=='')
		{
			mov.selectedIndex=selectedMovie;
		}
			
	}
function updateLength()
{
const selectedSeats=document.querySelectorAll('.rows .seat.selected');
	const seatIndex=[...selectedSeats].map((item)=>{
		return [...seat].indexOf(item);
	});
	localStorage.setItem('selectedSeats',JSON.stringify(seatIndex));
		console.log(seatIndex);
	const len=selectedSeats.length;
	count.innerText=len;
	price.innerText=ticketPrice*len;
}

updateLength();
