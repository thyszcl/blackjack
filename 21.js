let deck = [{face:'2❤️',value:2},{face:'3❤️',value:3},{face:'4❤️',value:4},{face:'5❤️',value:5},{face:'6❤️',value:6},{face:'7❤️',value:7},{face:'8❤️',value:8},{face:'9❤️',value:9},{face:'10❤️',value:10},{face:'J❤️',value:10},{face:'Q❤️',value:10},{face:'K❤️',value:10},{face:'A❤️',value:0},
            {face:'2♦️',value:2},{face:'3♦️',value:3},{face:'4♦️',value:4},{face:'5♦️',value:5},{face:'6♦️',value:6},{face:'7♦️',value:7},{face:'8♦️',value:8},{face:'9♦️',value:9},{face:'10♦️',value:10},{face:'J♦️',value:10},{face:'Q♦️',value:10},{face:'K♦️',value:10},{face:'A♦️',value:0},
            {face:'2♠️',value:2},{face:'3♠️',value:3},{face:'4♠️',value:4},{face:'5♠️',value:5},{face:'6♠️',value:6},{face:'7♠️',value:7},{face:'8♠️',value:8},{face:'9♠️',value:9},{face:'10♠️',value:10},{face:'J♠️',value:10},{face:'Q♠️',value:10},{face:'K♠️',value:10},{face:'A♠️',value:0},
            {face:'2♣️',value:2},{face:'3♣️',value:3},{face:'4♣️',value:4},{face:'5♣️',value:5},{face:'6♣️',value:6},{face:'7♣️',value:7},{face:'8♣️',value:8},{face:'9♣️',value:9},{face:'10♣️',value:10},{face:'J♣️',value:10},{face:'Q♣️',value:10},{face:'K♣️',value:10},{face:'A♣️',value:0}]
let userHand = []
let dealerHand = []
const stats = document.getElementById('stats')
const dealerCard1 = document.getElementById('dealerCard1')
const dealerCard2 = document.getElementById('dealerCard2')
const userCard1 = document.getElementById('userCard1')
const userCard2 = document.getElementById('userCard2')
const dealButton = document.getElementById('dealButton')
dealButton.addEventListener('click', deal)
const userCards =  document.getElementById('userCards')
const hitButton = document.getElementById('hitButton')
const standButton = document.getElementById('standButton')
const resetButton = document.getElementById('resetButton')




function shuffle(deck){
	// for 1000 turns
	// switch the values of two random cards
    for (let i = 0; i < 1000; i++){
		  let location1 = Math.floor((Math.random() * deck.length));
		  let location2 = Math.floor((Math.random() * deck.length));
		  let tmp = deck[location1];

		  deck[location1] = deck[location2];
		  deck[location2] = tmp;
	}
  return deck
}
shuffle(deck)


function deal(){
  userHand.push(deck.pop())
  dealerHand.push(deck.pop())
  userHand.push(deck.pop())
  dealerHand.push(deck.pop())
  stats.innerHTML = `You have ${calcUser()}`
  userCard1.innerHTML = `${userHand[0].face}`
  userCard2.innerHTML = `${userHand[1].face}`
  checkWinStart()
  dealButton.remove()
  hitButton.style.display = 'block'
  standButton.style.display = 'block'
  resetButton.style.display = 'block'

}


function hit(){
  let userHandValue = calcUser()
  let x = 0
  userHandValue.forEach((value)=>{
    if(value < 21){
      x += 1
    }
  })
  if(x > 0){
    userHand.push(deck.pop())
    let userHandValue = calcUser()
  }else{
    alert('youve alr bust')
  }
  htmlCode = ''
  userHand.forEach(card => {htmlCode += `<div id="userCard1" style="height:100px; width:80px; background-color: rgb(255, 255, 255);border-radius: 20px; display: inline-block;">${card.face}</div>`})
  userCards.innerHTML = htmlCode
  stats.innerHTML = `You have ${calcUser()}`
}


function calcUser(){
  aceCount = 0
  userHand.forEach(card => {
    if (card.face === 'A❤️' ||card.face === 'A♦️' ||card.face === 'A♠️' ||card.face === 'A♣️'){
      aceCount += 1
    }
  })
  
  
  if (aceCount == 1){
    handValue = 0
    handValue2 = 0
    userHand.forEach(card => {
      handValue += card.value
      handValue2 += card.value
    })
    handValue += 11
    handValue2 +=  1
    return [handValue, handValue2]
  }
    
  if (aceCount == 2){
    handValue = 0
    handValue2 = 0
    handValue3 = 0
    userHand.forEach(card => {
      handValue += card.value
      handValue2 += card.value
    })
    handValue += (11 + 11)
    handValue2 +=  (1 + 1)
    handValue3 += (11 + 1)
    return [handValue, handValue2, handValue3]
  }

  if (aceCount == 3){
    handValue = 0
    handValue2 = 0
    handValue3 = 0
    userHand.forEach(card => {
      handValue += card.value
      handValue2 += card.value
    })
    handValue += (11 + 11 + 11)
    handValue2 +=  (1 + 1+ 1)
    handValue3 += (11 + 1 + 1)
    handValue4 += (11 + 11 + 1)
    return [handValue, handValue2, handValue3, handValue4]
  }

  if (aceCount == 4){
    handValue = 0
    userHand.forEach(card => {
      handValue += card.value
    })
    handValue += 4
    return [handValue]
    }
 
  
    
  if (aceCount == 0){
    handValue = 0
    userHand.forEach(card => {
      handValue += card.value
    })
    return [handValue]
  }
  
}


function calcDealer(){
  aceCount = 0
  dealerHand.forEach(card => {
    if (card.face === 'A❤️' ||card.face === 'A♦️' ||card.face === 'A♠️' ||card.face === 'A♣️'){
      aceCount += 1
    }
  })

  if (aceCount == 0){
    handValue = 0
    dealerHand.forEach(card => {
      handValue += card.value
    })
    return [handValue]
  }

  if (aceCount == 1){
    handValue = 0
    handValue2 = 0
    dealerHand.forEach(card => {
      handValue += card.value
      handValue2 += card.value
    })
    handValue += 11
    handValue2 +=  1
    return [handValue, handValue2]
  }

  if (aceCount == 2){
    handValue = 0
    handValue2 = 0
    handValue3 = 0
    userHand.forEach(card => {
      handValue += card.value
      handValue2 += card.value
    })
    handValue += (11 + 11)
    handValue2 +=  (1 + 1)
    handValue3 += (11 + 1)
    return [handValue, handValue2, handValue3]
  }
}

function checkWinStart(){
  let userHandValue = calcUser()
  let dealerHandValue = calcDealer()
  if(dealerHandValue[0] === 21 && userHandValue[0] === 21){
    stats.innerHTML = `Tie! Both of you had blackjack --Dealer:${dealerHand[0].face} ${dealerHand[1].face} You:${userHand[0].face} ${userHand[1].face}`
    dealerCard1.innerHTML = `${dealerHand[0].face}`
    dealerCard2.innerHTML = `${dealerHand[1].face}`
  }
  if (dealerHandValue[0] === 21 || dealerHandValue[0] === 22){
    stats.innerHTML = `Blackjack! Dealer wins -- Dealer had ${dealerHand[0].face} ${dealerHand[1].face}`
    dealerCard1.innerHTML = `${dealerHand[0].face}`
    dealerCard2.innerHTML = `${dealerHand[1].face}`
  }
  if (userHandValue[0] === 21 || userHandValue[0] === 22){
    stats.innerHTML = `Blackjack! You win -- You had ${userHand[0].face} ${userHand[1].face}`
    dealerCard1.innerHTML = `${dealerHand[0].face}`
    dealerCard2.innerHTML = `${dealerHand[1].face}`
  }

}

function stand(){
  let userValue = 0;
  let dealerHandValue = calcDealer(); // Assuming this returns an array like calcUser()
  let userHandValue = calcUser(); // Expected to return [handValue] or [handValue, handValueWithAceAs11]

  if (userHandValue.length > 1) {
    let validValues = userHandValue.filter(value => value <= 21);
    
    if (validValues.length > 0) {
      userValue = Math.max(...validValues);
    } else {
      userValue = Math.min(...userHandValue); // If all values bust, take the smallest (worst) one
    }
  } else {
    userValue = userHandValue[0];
  }

  const dealerValue = dealerHandValue[0]; // Assuming dealerHandValue is an array

  if (userValue > 21){
    stats.innerHTML = `You've bust --- Dealer has ${dealerValue}`
  }
  else if(userValue < dealerValue){
    stats.innerHTML = `You've lost --- Dealer has ${dealerValue}, You have ${userValue}`
  }
  else if(dealerValue === userValue){
    stats.innerHTML = `Its a Tie`
  }
  else if(userValue > dealerValue){
    stats.innerHTML = `You win --- You had ${userValue}, Dealer had ${dealerValue}`
  }
  dealerCard1.innerHTML = `${dealerHand[0].face}`
  dealerCard2.innerHTML = `${dealerHand[1].face}`
}