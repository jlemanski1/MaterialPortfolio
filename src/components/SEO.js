import * as React from "react"
import { Helmet } from "react-helmet"

const seo = ({ title, description, image }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {image && <meta name="image" content={image} />}
    </Helmet>
  )
}

export default seo;