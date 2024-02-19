// scrooll function
function scrollToSection(sectionId) {
  let section = document.getElementById(sectionId);
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
let totalbooked = 0;
let totalSelectedSeats = 0;

for (const seat of seats) {
  seat.addEventListener("click", function selectSeat(event) {
    seat.removeEventListener("click", selectSeat); // Remove the event listener
    totalbooked += 1;
    if (totalbooked <= 4) {
      seat.classList.add("bg-[#1DD100]");
      totalPrice += 550;
      grandTotal += 550;
      totalSeatSelected += 1;
      selectedSeat += 1;
      totalSelectedSeats += 1;
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
      let i = newSeatContainer.querySelector("h5");
      i.innerText = SeatName;
      // Grand total Price
      const grand_total = document.getElementById("grand_total");
      grand_total.innerText = grandTotal;

      cosnSeat.appendChild(newSeatContainer);
      const total_price = document.getElementById("total_price");
      total_price.innerText = totalPrice;
    } else {
      alert("Sorry! You can't buy more than 4 tickets (its our policy)");
    }
  });
}

function applyCoupon() {
  const inputField = document.getElementById("input-field").value;
  console.log(typeof inputField);
  if (totalSelectedSeats == 4) {
    if (inputField === "NEW15") {
      document.getElementById("input-field").value = "";

      const DiscountPriceOfTotal = (totalPrice * 15) / 100;
      totalPrice -= DiscountPriceOfTotal;
      console.log(DiscountPriceOfTotal);
      document
        .getElementById("discountPriceContainer")
        .classList.remove("hidden");
      document.getElementById("discount_Price").innerText =
        DiscountPriceOfTotal;
      document.getElementById("COupn_box").classList.add("hidden");
      let leftMoney = grandTotal - DiscountPriceOfTotal;
      document.getElementById("grand_total").innerText = leftMoney;
    } else if (inputField === "Couple 20") {
      document.getElementById("input-field").value = "";

      const DiscountPriceOfTotal = (totalPrice * 20) / 100;
      totalPrice -= DiscountPriceOfTotal;
      console.log(DiscountPriceOfTotal);
      document
        .getElementById("discountPriceContainer")
        .classList.remove("hidden");
      document.getElementById("discount_Price").innerText =
        DiscountPriceOfTotal;
      document.getElementById("COupn_box").classList.add("hidden");
      let leftMoney = grandTotal - DiscountPriceOfTotal;
      document.getElementById("grand_total").innerText = leftMoney;
    } else {
      alert(" please put a valid coupon ");
      document.getElementById("input-field").value = "";
    }
  } else {
    alert("please select at leaast 4 seats to apply that coupon!!");
  }
}
document.getElementById("next").addEventListener("click", function () {
  const inputfield_number = document.getElementById("inputFieldNumber");
  if (totalSelectedSeats >= 1 && inputfield_number.value.length == 11) {
    document.getElementById("total_Page").classList.add("hidden");
    document.getElementById("purchaseCompletePhase").classList.remove("hidden");
  } else {
    if (totalSelectedSeats < 1 && inputfield_number.value.length < 11) {
      alert("Please select one seat and provide your phone number");
    } else if (inputfield_number.value.length != 11) {
      alert("Provide a valid 11 Digit  phone number!");
    } else {
      alert("Please select at least one seat to confirm!");
    }
  }
});
