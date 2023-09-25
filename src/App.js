import React from "react"
import Navbar from "./component/Navbar"
import Hero from "./component/Hero"
import Card from "./component/card"
import data from "./data"

export default function App() {
  const cards=data.map(item=>{
    return(
      <Card 
      key={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="card-list">
        {cards}
      </section>
    </div>
  )
}