const counters = document.querySelectorAll('.count')
counters.forEach((countwalba) =>{
  countwalba.innerHTML = '0'
  const countUpdate = () =>{
    const target = Number(
      countwalba.getAttribute('data-target')
    )
    //kan kore numbarad dataset bala so qday
    const count = Number(countwalba.innerHTML)
    //kan kore string aa number lo badalay
    const inc = target / 50
    if(count < target){
      countwalba.innerHTML = 
      `${Math.ceil(count + inc)}`
      setTimeout(countUpdate,20)
      //marwalbo count wxa ku darta 
      // target oo lo qaybiyay 200
    }else{
      countwalba.innerHTML = target
    }
  }
  countUpdate()
})

