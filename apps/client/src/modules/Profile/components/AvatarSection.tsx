import { Avatar, AvatarFallback, AvatarImage } from "@spotify-social/components";
import { profileData } from "@/modules/Profile/data";

interface Props {
    profile: typeof profileData;
}

export default function AvatarSection({ profile }: Props) {

    return (
        <div className="flex justify-center items-center">
            <Avatar className="w-36 h-36">
                <AvatarImage src={profile.user.avatar} />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    )
}

export { AvatarSection };