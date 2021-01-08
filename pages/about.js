import Link from 'next/link';
import Header from './Layout/AppHead';

export default function(){
  return (
    <div>
      <Header />
      <div className="container">
        <h1>About</h1>
        <p>This is about page.</p>
      </div>
    </div>
  );
}
