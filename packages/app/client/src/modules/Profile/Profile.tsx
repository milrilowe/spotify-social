import { Separator } from '@spotify-social/components';
import { profileData, postsList } from './data';
import { BioSection, Posts, AvatarSection } from './components';

interface Props {
    username: string;
}

export default function Profile({ username }: Props) {
    const profile = profileData;
    const posts = postsList;

    return (
        <div className="flex flex-col gap-4 w-4/5 max-w-7xl">
            <div className="grid grid-cols-3 gap-4">
                <AvatarSection profile={profile} />
                <BioSection username={username} profile={profile} />
            </div>

            <Separator />

            <div className="grid grid-cols-3 gap-1">
                <Posts posts={posts} />
            </div>
        </div>
    )
}