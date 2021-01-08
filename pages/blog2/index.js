import Link from 'next/link';
import Header from '../Layout/AppHead';
//
export default function Blog() {
  return (
    <div>
      <Header />
      <h1>Blog2</h1>
      <hr />
      <ul>
        <li>
          <Link href="/blog2/page-2"><a>page-2</a></Link>
        </li>        
        <li>
          <Link href="/blog2/page-3"><a>page-3</a></Link>
        </li>        
        <li>
          <Link href="/blog2/page-4"><a>page-4</a></Link>
        </li>        
      </ul>
    </div>
  );
}