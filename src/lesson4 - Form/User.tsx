interface IProps {
  firstName: string;
  lastName: string;
}

export default function User({ firstName, lastName }: IProps) {
  return (
    <div>
      My name is: {firstName} {lastName}
    </div>
  );
}
