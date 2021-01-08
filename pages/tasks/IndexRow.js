import Link from 'next/link';
import Header from '../Layout/AppHead';

const IndexRow = props => (
  <li>
    ID: {props.id} , 
    <Link href={`/tasks/show?id=${props.id}`}>
      <a>{props.title}</a>
    </Link>
    <Link href={`/tasks/edit?id=${props.id}`}>
      <a>[ edit ]</a>
    </Link>
  </li>
);
export default IndexRow;
