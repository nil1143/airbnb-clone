import React from "react"
export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (
        props.openSpots !== 0) {
            badgeText = "ONLINE"
        }
    
    return(
  
    <div className="card">
        {badgeText &&  <div className="card--badge">{badgeText}</div>}
        <img src={`./images/${props.coverImg}`} className="card--image"/>
        <div className="card--stats">
            <img src="../images/star.png"/>
            <span>{props.stats.rating}</span>
            <span className="gray">({props.stats.reviewCount})</span>
            <span className="gray">{props.location}</span>
        </div>
        <div className="card--info">
        <p>{props.title}</p>
        <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
        </div>

    )}


    // <div className="card">
    // <img src="./images/img1.png" className="card--image"/>
    // <div className="card--stats">
    //     <img src="./images/star.png" id="star"/>
    //     <span>5.7</span>
    //     <span className="gray">(6) *</span>
    //     <span className="gray">USA</span>
    // </div>
    // <div className="card--info">
    // <p>Life lessons with Katie Zaferes</p>
    // <p><span className="bold">From $135</span> / person</p>
    // </div>



//
//  TESTS //

//     const nums = [1, 4, 9, 16];

// // pass a function to map
// // const map1 = nums.map(x => x * x);
// const map1 = nums.map(function(item) {
//     return item * item
// })
// console.log(map1);
// //

// const names = ['tom', 'cinek', 'woj', 'maciek']

// const uppercase = names.map(item => item[0].toUpperCase()+ item.slice(1))

// console.log(uppercase);
// //

// const pokemon = ['Bulbasaur', 'Charmander', 'Squirtle']
// const elements = pokemon.map(mon => `<p>${mon}</p>`
// )

// console.log(elements);

