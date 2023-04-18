export default function User(props) {
  const { firstName, lastName } = props;
  return (
    <div>
      My name is: {firstName} {lastName}
    </div>
  );
}
