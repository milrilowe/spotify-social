import { Avatar, AvatarFallback, AvatarImage, Card, Separator } from '@spotify-social/components';
import data from './data';
import { Link } from '@tanstack/react-router';
import { Heart, More, Save, Send, SpeechBubble } from '@spotify-social/icons';
import { api } from '@/utils/trpc';

interface Props {

}

export default function Feed({ }: Props) {

    const user = api.auth.getSession.useQuery()

    return (
        <div className="w-full p-2">
            <div className="w-full flex justify-center"> {/* Added flex and justify-center */}
                <ul className="flex flex-col gap-8 w-[36rem]">
                    {data.map((post, index) => (
                        <>
                            {index > 0 ? (
                                <li>
                                    <Separator />
                                </li>
                            ) : null}
                            <li key={post.id}>
                                <Card className="flex flex-col cols-1 h-full w-full p-2 gap-2">
                                    {/* Header */}
                                    <div className="flex gap-2 p-2">
                                        <div className="flex items-center">
                                            <Link to={post.user.name}>
                                                <Avatar>
                                                    <AvatarImage src="https://github.com/shadcn.png" />
                                                    <AvatarFallback>CN</AvatarFallback>
                                                </Avatar>
                                            </Link>
                                        </div>
                                        <div className="flex justify-between w-full">
                                            <div>
                                                <Link to={post.user.name}>
                                                    <h3 className="font-bold text-sm">{post.user.name}</h3>
                                                </Link>
                                                <p className="text-sm">{post.song.artist} - {post.song.title}</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <More size={20} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Image */}
                                    <div>
                                        <img src={post.image} alt={post.song.title} className="w-full" />
                                    </div>

                                    {/* Meta */}
                                    <div className="flex flex-col cols-1 gap-2 p-2">
                                        <div className="flex justify-between">
                                            <div className="flex gap-4">
                                                <Heart size={24} />
                                                <SpeechBubble size={24} />
                                                <Send size={24} />
                                            </div>
                                            <div>
                                                <Save size={24} />
                                            </div>
                                        </div>
                                        <div>
                                            <p>{post.likes} likes</p>
                                            <span className="flex gap-1">
                                                <a className="font-bold text-sm">{post.user.name}</a>
                                                <p className="text-sm">{post.content}</p>
                                            </span>
                                        </div>
                                        <div>
                                            <div>{/* comments */}</div>
                                            <div>Add a comment...</div>
                                        </div>
                                    </div>
                                </Card>
                            </li>
                        </>
                    ))}
                </ul>
            </div>
        </div>
    )

}