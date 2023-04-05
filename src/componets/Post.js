// export default function Post() {
//     return (
//         <div className='post'>
//         <img src='https://www.ibm.com/blogs/think/wp-content/uploads/2020/01/AI-adoption-image.jpg'></img>
//         <div className='texts'>
          
//         </div>
//         <h2>AI Adoption on the Rise</h2>
//         <p className='info'>
//           <a className='author'>Rob Thomas</a>
//           <time>2023-01-06</time>
//         </p>
//         <p className='summary'>AI has captured the imagination and attention of people globally. But in the business world, the rate of adoption of artificial intelligence has lagged behind the level of interest through 2019. Even though we hear that most business leaders believe AI provides a competitive advantage, up until recently, some industry watchers have pegged enterprise adoption at less than 20%.</p>
        
//       </div>
//     )
// }




import {formatISO9075} from "date-fns";
import {Link} from "react-router-dom";

export default function Post({_id,title,summary,cover,content,createdAt,author}) {

  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${_id}`}>
          <img src={'http://localhost:4000/'+cover} alt=""/>
        </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${_id}`}>
        <h2>{title}</h2>
        </Link>
        <p className="info">
          <a className="author">{author.username}</a>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}