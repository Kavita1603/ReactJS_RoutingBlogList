// Write your JS code here
import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props
  return (
    <div className="blogList-container">
      {blogsList.map(item => (
        <BlogItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default BlogList
