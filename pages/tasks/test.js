// import Link from 'next/link';
import Header from '../Layout/AppHead';
import IndexRow from './IndexRow';
import LibTask from '../../libs/LibTask';
//
export default function Page({ data }) {
//  console.log(data)
  const items = data

  return (
    <div>
      <Header />
      <div className="container">
        <h1>Tasks</h1>
        <hr />
        <ul>
          {items.map((item, index) => {
            return <IndexRow key={index}
            id={item.id} title={item.title} />;
          })}        

        </ul>
      </div>
    </div>
  );
}
export async function getStaticProps({ params }) {
  var items =[]
  items = await LibTask.get_items()
//  console.log(items)
  return {
      props: { data: items },
  }
}
//

/*
export async function getServerSideProps({ params }) {
  return {
      props: { data: {name: "n1"} },
  }
}
*/
