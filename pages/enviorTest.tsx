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

export function getServerSideProps() {
  console.log(
    "----------------SERVER ENVIRONMENT VARIABLES TEST----------------"
  );
  console.log("process.env.NODE_ENV : ", process.env.NODE_ENV);
  console.log("process.env.TEST : ", process.env.TEST);
  console.log("process.env.NEXT_PUBLIC_TEST : ", process.env.NEXT_PUBLIC_TEST);
  return { props: {} };
}
