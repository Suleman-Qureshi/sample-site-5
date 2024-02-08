let nav_bar = document.querySelectorAll(`nav`)[0]
let progress_bar_1 = document.getElementById(`svg-1`)
let progress_bar_2 = document.getElementById(`svg-2`)
let progress_bar_3 = document.getElementById(`svg-3`)
let progress_number_1 = document.getElementById(`number1`)
let progress_number_2 = document.getElementById(`number2`)
let progress_number_3 = document.getElementById(`number3`)
let progress_bars = document.querySelectorAll(`.svg`)
let progress_box = document.getElementById(`progress-box`)
let counter1 = 0
let counter2 = 0
let counter3 = 0
window.addEventListener(`scroll`, () => {
  nav_bar.classList.toggle(`nav_color`, window.scrollY > 200)
})
window.addEventListener(`scroll`, () => {
  const trigger_progress = window.innerHeight / 2 * 1
  progress_bars.forEach(progress_box => {
    const box_top = progress_box.getBoundingClientRect().top
    if (box_top < trigger_progress) {
      progress_bar_1.classList.add(`svganimation1`, window.scrollY >= 3000, setInterval(() => {
        if (counter1 == 80) {clearInterval;}else {counter1 += 1;progress_number_1.innerHTML = `${counter1}%`;}}, 300))
      progress_bar_2.classList.add(`svganimation2`, window.scrollY > 2750)
      progress_bar_3.classList.add(`svganimation3`, window.scrollY > 2750)

      setInterval(() => {
        if (counter1 == 80) {clearInterval;}else {counter1++;progress_number_1.innerHTML = `${counter1}%`;}}, 300)
      setInterval(() => {
        if (counter2 == 60) {clearInterval;}else {counter2++;progress_number_2.innerHTML = `${counter2}%`;}}, 300)
      setInterval(() => {
        if (counter3 == 50) {clearInterval;}else {counter3++;progress_number_3.innerHTML = `${counter3}%`;}}, 300)
    }
  })
});
let section =document.querySelectorAll(`section`);
let navlinks=document.querySelectorAll(`nav ul a`);
 window.onscroll=()=>{
    section.forEach(sec=>{
          let top=window.scrollY;
          let offset=sec.offsetTop -40;
          let height=sec.offsetHeight;
          let id=sec.getAttribute(`id`);
          if(top>=offset && top<offset+height){
            navlinks.forEach(link=>{
                link.classList.remove(`active`);
                document.querySelector('nav ul a[href*=' + id + ']').classList.add(`active`)
            })
          }
    })
 }