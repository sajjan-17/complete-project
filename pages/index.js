import { Fragment } from "react";

import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

const DUMMY_POSTS =[
    {title:'Starting NextJS1',
    image:'getting-started-nextjs.png',
     excerpt:'nextjsis a react framework ',
     date:'2023-03-17',
     slug:'starting-nextjs1',
    },

    {title:'Starting NextJS2',
    image:'getting-started-nextjs.png',
     excerpt:'nextjsis a react framework ',
     date:'2023-03-17',
     slug:'starting-nextjs2',
    },

    {title:'Starting NextJS3',
    image:'getting-started-nextjs.png',
     excerpt:'nextjsis a react framework ',
     date:'2023-03-17',
     slug:'starting-nextjs3',
    },


];


function HomePage (){
return(
    <Fragment>
        <Hero/>
       <FeaturedPosts posts={DUMMY_POSTS}/>

    </Fragment>
)
}
export default HomePage;