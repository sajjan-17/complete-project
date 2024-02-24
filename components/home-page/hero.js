import Image from "next/image";

import classes from './hero.module.css'

function Hero(){
return(
    <section className={classes.hero }>
        <div className={classes.image}>
            <Image src="/images/site/mandara.jpeg" alt="An image showing Mandara V" width={300} height={300} />
        </div>
        <h1>HI!!, I am Mandara V </h1>
        <p>
            I blog about web development - especially frountend frameworks like Angular or React. 
        </p>
    </section>
)

}
export default  Hero;