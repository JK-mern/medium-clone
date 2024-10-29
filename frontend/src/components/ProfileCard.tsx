import { Card, CardHeader, CardTitle } from "./ui/card";

interface ProfileCardProps {
  name: string;
  email: string;
}

function ProfileCard({ name, email }: ProfileCardProps) {
  return (
    <div className="">
      <Card className="">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{name}</CardTitle>
          <p className="text-gray-500">{email}</p>
        </CardHeader>
      </Card>
    </div>
  );
}

export default ProfileCard;
