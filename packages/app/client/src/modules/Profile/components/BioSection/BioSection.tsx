import { profileData } from "@/modules/Profile/data";
import { MutualFollowers, ProfileHeader, ProfileStats } from "./components";

interface Props {
    username: string;
    profile: typeof profileData
}

export default function BioSection({ username, profile }: Props) {
    return (
        <div className="col-span-2 flex flex-col gap-4">

            <ProfileHeader username={username} profile={profile} />

            <ProfileStats profile={profile} />

            {/* Bio */}
            <p>{profile.bio}</p>

            <MutualFollowers mutualFollowers={profile.mutualFollowers} />

        </div>
    )
}