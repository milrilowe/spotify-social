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
            <div className="flex flex-col ">
                <div className="flex gap-4">
                    <h1 className="text-xl font-bold">{username}</h1>
                </div>

            </div>
        </div>
    )
}

export { ProfileHeader };