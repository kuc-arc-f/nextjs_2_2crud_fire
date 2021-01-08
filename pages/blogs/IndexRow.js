import Link from 'next/link';
import Header from '../Layout/AppHead';

const IndexRow = props => (
  <li>
    <Link href={`/blogs/show?id=${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);
export default IndexRow;
