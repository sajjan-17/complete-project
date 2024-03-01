import AllPosts from "../../components/posts/all-posts";

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
function AllPostsPage (){
 return(
    <AllPosts posts={DUMMY_POSTS}/>
 )
}
export default AllPostsPage;