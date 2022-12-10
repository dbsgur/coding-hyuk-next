import dbConnect from "lib/db/dbConnect";
import Item from "lib/schema/Item";

export default function enviorTest() {
  console.log(
    "----------------CLIENT ENVIRONMENT VARIABLES TEST----------------"
  );
  console.log("process.env.NODE_ENV : ", process.env.NODE_ENV);
  console.log("process.env.TEST : ", process.env.TEST);
  console.log("process.env.NEXT_PUBLIC_TEST : ", process.env.NEXT_PUBLIC_TEST);

  return (
    <div>
      <h1>TEST</h1>
      <p>adf</p>
      <p>adf</p>
    </div>
  );
}

export async function getServerSideProps() {
  console.log("??2");

  await dbConnect();
  console.log("??3");
  const result = await Item.find({});

  const items = result.map((doc: any) => {
    console.log(`doc : ${doc}`);

    if (doc === null) {
      console.log(doc);
    }
    const item = doc.toObject();
    item._id = item._id.toString();
    return item;
  });

  console.log(
    "----------------SERVER ENVIRONMENT VARIABLES TEST----------------"
  );
  console.log("process.env.NODE_ENV : ", process.env.NODE_ENV);
  console.log("process.env.TEST : ", process.env.TEST);
  console.log("process.env.NEXT_PUBLIC_TEST : ", process.env.NEXT_PUBLIC_TEST);

  return { props: { items: items } };
  // return { props: {} };
}
