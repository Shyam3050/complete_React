//ourdomain.com
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUP = [
  {
    id: "m1",
    title: "A first Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Pattamundai_Brahmani_river.jpg/440px-Pattamundai_Brahmani_river.jpg",
    address: "patrapur md street",
    description: "This is First meetup",
  },
  {
    id: "m2",
    title: "A second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Pattamundai_Brahmani_river.jpg/440px-Pattamundai_Brahmani_river.jpg",
    address: "rajpur reddy street",
    description: "This is second meetup",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getStaticProps() {
//   return {
//     props: {
//       meetups: DUMMY_MEETUP,
//     },
//   };
// }
export default HomePage;
