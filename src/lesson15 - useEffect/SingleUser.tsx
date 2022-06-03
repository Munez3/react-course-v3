import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchUser } from "./api";
import { IUser } from "./types";

export default function SingleUser(): React.ReactElement | null {
  const [user, setUser] = useState<IUser | undefined>(undefined);
  const { userId } = useParams<{ userId: string }>();
  const navigator = useNavigate();

  useEffect(() => {
    if (userId) {
      fetchUser(userId)
        .then((response) => setUser(response.data))
        .catch((error) => navigator("/users"));
    }
  }, [userId, navigator]);

  if (!user) {
    return null;
  }

  return (
    <div>
      Użytkownik: {user?.firstName} {user?.lastName}
    </div>
  );
}
