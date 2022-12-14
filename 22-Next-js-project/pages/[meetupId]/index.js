import MeetupDetail from "../../components/meetups/MeetupDetail";
function MeetupDetailPage() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Pattamundai_Brahmani_river.jpg/440px-Pattamundai_Brahmani_river.jpg"
      title="first Title"
      address="patrapur md street"
      description="near sbi atm"
    />
  );
}

export async function getStaticProps(content) {
    const meetupId = content.params.meetupId;
  return {
    props: {
        id: meetupId,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Pattamundai_Brahmani_river.jpg/440px-Pattamundai_Brahmani_river.jpg",
      title: "first Title",
      address: "patrapur md street",
      description: "near sbi atm",
    },
  };
}
export default MeetupDetailPage;
