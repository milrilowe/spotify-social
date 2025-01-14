import { AspectRatio, Avatar, AvatarFallback, AvatarImage, Button, Separator } from '@spotify-social/components';
import { More } from '@spotify-social/icons';
import data from './data';
import BioSection from './components/BioSection';
interface Props {
    username: string;
}

export default function Profile({ username }: Props) {

    return (
        <div className="p-2 w-full flex justify-center">
            <div className="flex flex-col gap-4 w-4/5 max-w-7xl">
                <div className="grid grid-cols-3 gap-4">
                    <div className="flex justify-center items-center">
                        <Avatar className="w-36 h-36">
                            <AvatarImage src={data.user.avatar} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                    <BioSection username={username} data={data} />
                </div>

                <Separator />

                <div className="grid grid-cols-3 gap-1">
                    {data.posts.map((post, index) => (
                        <div key={post.id} className="flex flex-col gap-1">
                            <div>
                                <AspectRatio ratio={16 / 9}>
                                    <img src={post.song.album.image} alt={post.song.title} className="w-full" />
                                </AspectRatio>
                            </div>
                            <div>
                                <p>{post.likes} likes</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}