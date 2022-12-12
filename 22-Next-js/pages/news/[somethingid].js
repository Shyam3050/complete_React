import { useRouter } from "next/router";
const SomeThing = () => {
  const router = useRouter();
  const somethingId = router.query.somethingid;

  //send a request to backend API 
  //to fetch the news item with newsId
  console.log(somethingId);
  return <h1>Something</h1>;
};
export default SomeThing;
