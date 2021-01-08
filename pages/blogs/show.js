import { useRouter } from 'next/router';
import Header from '../Layout/AppHead';
//
const Page = () => {
  const router = useRouter();
//  console.log(router.query)
  return (
    <div>
      <Header />
      <h1>{router.query.id}</h1>
      <p>content</p>
    </div>
  );
};

export default Page;
