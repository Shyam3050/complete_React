//ourdomain.com/new-meetup
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetUpPage() {
  function NewMeetupHandler(enterdata) {
    console.log(enterdata);
  }

  return <NewMeetupForm onAddMeetup={NewMeetupHandler} />;
}
export default NewMeetUpPage;
