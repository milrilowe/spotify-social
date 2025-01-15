import { Separator } from '@spotify-social/components';
import { Post } from './components';
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
            <div className="w-full flex justify-center">
                <ul className="flex flex-col gap-8 w-[36rem]">
                    {data.map((post, index) => (
                        <>
                            {index > 0 ? (
                                <li>
                                    <Separator />
                                </li>
                            ) : null}
                            <li key={post.id}>
                                <Post post={post} />
                            </li>
                        </>
                    ))}
                </ul>
            </div>
        </div>
    )

}