// scrooll function
function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// seats funciton
let seats = document.querySelectorAll(".seat-btn");
let selectedSeat = 0;
let totalSeatDecrease = 40;
let totalPrice = 0;
let totalSeatSelected = 0;
let grandTotal = 0;

for (const seat of seats) {
  seat.addEventListener("click", function (event) {
    seat.classList.add("bg-[#1DD100]");
    totalPrice += 550;
    grandTotal += 550;
    totalSeatSelected += 1;
    console.log(totalPrice);
    selectedSeat += 1;
    // selected seat
    const Sseat = document.getElementById("selected_seat_number");
    Sseat.innerText = selectedSeat;
    // seats leftover
    const leftover = document.getElementById("totalSeatDecrease");
    // let newSeatlleft =
    totalSeatDecrease -= 1;
    leftover.innerText = totalSeatDecrease;
    // chosen seat display
    const cosnSeat = document.getElementById("chosen_seats");
    let newSeatContainer = document.createElement("div");
    newSeatContainer.classList.add("flex");
    newSeatContainer.classList.add("justify-between");
    newSeatContainer.classList.add("pt-3");

    newSeatContainer.innerHTML = `
    <h5 class="  text-sm "></h5>
    <h5 class="  text-sm ">Economy</h5>
    <h5 class="  text-sm ">550</h5>
    `;

    let SeatName = seat.innerText;
    console.log(SeatName);
    let i = newSeatContainer.querySelector("h5");
    i.innerText = SeatName;
    console.log(i);
    // Grand total Price
    const grand_total = document.getElementById("grand_total");
    grand_total.innerText = grandTotal;

    cosnSeat.appendChild(newSeatContainer);
    const total_price = document.getElementById("total_price");
    total_price.innerText = totalPrice;
  });
}
