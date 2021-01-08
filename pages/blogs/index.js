import Link from 'next/link';
import Header from '../Layout/AppHead';
import IndexRow from './IndexRow';
//
export default function Blog() {
  return (
    <div>
      <Header />
      <h1>My Blog</h1>
      <hr />
      <ul>
        <IndexRow id="hello-123" />
        <IndexRow id="hello-456" />
      </ul>
    </div>
  );
}