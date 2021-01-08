import Link from 'next/link';
import Header from './Layout/AppHead';

export default function(){
  return (
    <div>
      <Header />
      <div className="container">
        <h1>Home</h1>
        <p>This is index page.</p>
      </div>
    </div>
  );
}
