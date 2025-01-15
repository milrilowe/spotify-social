import { Button } from '@spotify-social/components';
import { profileData } from '@/modules/Profile/data';
import { More } from '@spotify-social/icons';

interface Props {
    username: string;
    profile: typeof profileData;
}

export default function ProfileHeader({ username, profile }: Props) {
    return (
        <div>
            <div className="flex justify-between items-center">
                <div className="flex gap-4">
                    <h1 className="text-xl">{username}</h1>
                </div>
                <div className="flex gap-2">
                    <Button variant="default">{profile.isFollowing ? 'Follow' : 'Unfollow'}</Button>
                    <Button variant="outline">Message</Button>
                    <Button variant="ghost"><More size={20} /></Button>
                </div>
            </div>
        </div>
    )
}

export { ProfileHeader };