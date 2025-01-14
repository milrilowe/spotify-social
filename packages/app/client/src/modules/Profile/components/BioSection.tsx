import { Button } from "@spotify-social/components";
import { More } from "@spotify-social/icons";
import data from "../data";

interface Props {
    username: string;
    data: typeof data
}

export default function BioSection({ username, data }: Props) {
    return (
        <div className="col-span-2 flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <div className="flex gap-4">
                    <h1 className="text-xl">{username}</h1>
                </div>
                <div className="flex gap-2">
                    <Button variant="default">{data.isFollowing ? 'Follow' : 'Unfollow'}</Button>
                    <Button variant="outline">Message</Button>
                    <Button variant="ghost"><More size={20} /></Button>
                </div>
            </div>
            <div className="flex gap-4">
                <div>
                    <p>{data.numberOfPosts} posts</p>
                </div>
                <div>
                    <p>{data.numberOfFollowers} followers</p>
                </div>
                <div>
                    <p>{data.numberOfFollowing} following</p>
                </div>
            </div>
            <div>
                <p>{data.bio}</p>
            </div>
            <div>
                <p>{data.mutualFollowers.numberOfMutualFollowers} mutual followers</p>
            </div>

        </div>
    )
}