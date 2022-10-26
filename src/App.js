import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
// import About from "./components/About"
// import Contacts from "./components/Contacts"
import Card from "./components/Card"
import data from "./data"

console.log(data);



export default function App() {

    const cards = data.map(item => {
        return (
            <Card
            key={item.id}
            // item={item}
            {...item}

            // img={item.coverImg}
            // rating={item.stats.rating}
            // reviewCount={item.stats.reviewCount}
            // locaton={item.location}
            // title={item.title}
            // price={item.price}
            // openSpots={item.openSpots}
                />
        )
    })
    return (
        <div className="container">
        <Navbar />
        <Hero /> 
        <section className="sec">
        {cards}
        </section>
        
        
        </div>
    )
}

 
      {/* <Card 
            img="../images/img1.png"
            rating="5.0"
            reviewCount={(6)}
            country="USA"
            title="Life lessons wih Katie Zafares"
            price={136}
        />
        <Card 
          img="../images/img2.png"
          rating="4.0"
          reviewCount={(30)}
          country="UK"
          title="Learn wedding photography"
          price={125}
            />
        <Card 
            img="../images/img3.png"
            rating="4.8"
            reviewCount={(4)}
            country="USA"
            title="Group mountain biking"
            price={50}
                /> */}
        {/* <Contacts 
            img="./images/cat1.png" className="cat1"
            name="Roman"
            email="thecat@hotmail.com"
            phone="(212) 555-1234"
            />
        <Contacts 
          img ="./images/cat2.png" className="cat2"
          name="Felix"
          email="felixcat@gmail.com"
          phone="+48 555-123-555"/>
        <Contacts 
            img="./images/cat3.png" className="cat3"
            name="Joe"
            email="ironcat@hotmail.com"
            phone="(+351) 555-1234-23"/>
        <Contacts 
            img="./images/cat4.png" className="cat4"
            name="Pumpkin"
            email="hellcat@hotmail.com"
            phone="(31) 553-5-1234"/> */}
      {/* <About /> */}
        {/* <Interests /> */}
        {/* <Footer /> */}