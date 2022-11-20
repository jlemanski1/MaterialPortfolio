// import * as React from 'react';
// import BlogPost from './BlogPost';

// const BlogPostList = (props) => {

//     return (
//         <section className="resume-section p-3 p-lg-5 d-flexgrow align-items-center" id={props.fields.scroll_anchor_id}>
//         <div className="w-100">
//             <h2 className="mb-5">{props.fields.section_title}</h2>
//             {props.fields.section_subtitle.length !== 0 && <div className="subheading mb-3">{props.fields.section_subtitle}</div>}
//             {props.fields.experience_items.map(experience => <Experience key={experience.company_name} {...experience}/>)}
//           </div>
//         </section>
//     );
// }

// export default BlogPostList;
import React from 'react'
import { Link } from 'gatsby'
import Layout from './Layout'
import seo from '../components/SEO'

const BlogPostList = (props) => {
    console.log(`props: ${props}`)
  
    //const { data } = this.props
    const siteTitle = props.site.siteMetadata.title
    const posts = props.allButterPost.edges

    return (
      <Layout location={props.location} title={siteTitle}>
        <seo title="Blog Home" />

        <div>
          {posts.map(({ node }) => {
            const title = node.seo_title || node.slug
            return (
              <section className="resume-section p-3 p-lg-5 d-flexgrow align-items-center">
              <div className="w-100">
               <div
                 key={node.slug}>
                 <h3>
                   <Link to={`/blog/${node.slug}`}>
                     {title}
                   </Link>
                 </h3>
                 <small>{node.date}</small>
                 <p>{node.summary}</p>
               </div>
              </div>
              </section>
              
            )
          })}
        </div>
      </Layout>
    )
  }



export default BlogPostList;