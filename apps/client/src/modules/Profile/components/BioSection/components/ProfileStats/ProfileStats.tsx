import { profileData, followersList, followingList } from '@/modules/Profile/data';
import { Followers, Following } from "./components";

interface Props {
    profile: typeof profileData;
}

export default function ProfileStats({ profile }: Props) {
    return (
        <div className="flex gap-4 text-sm">
            <div>
                <p>{profileData.numberOfPosts} posts</p>
            </div>
            <Followers numberOfFollowers={profile.numberOfFollowers} followers={followersList} />
            <Following numberOfFollowing={profile.numberOfFollowing} following={followingList} />
        </div>
    );
}

export { ProfileStats };