import ReactMarkdown from 'react-markdown';

import PostHeader from "./post-header";

import classes from './post-content.module.css'

const DUMMY_POSTS={
    title:'Starting NextJS',
    image:'getting-started-nextjs.png',
     date:'2023-03-17',
     slug:'starting-nextjs1',
     content:' # This is the first post'
    

}

function PostContent(){
    const imagePath= `/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`


    return(
<article className={classes.content}>
    <PostHeader title={DUMMY_POSTS.title} image={imagePath}/>
   <ReactMarkdown>{DUMMY_POSTS.content}</ReactMarkdown>
</article>
        )
}

export default PostContent;