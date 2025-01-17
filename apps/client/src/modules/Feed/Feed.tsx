import { Separator } from '@spotify-social/components';
import { Post } from './components';
import data from './data';
import { Link } from '@tanstack/react-router';
import { Heart, More, Save, Send, SpeechBubble } from '@spotify-social/icons';
import { api } from '@/utils/trpc';

interface Props {

}

export default function Feed({ }: Props) {


    return (

        <ul className="flex flex-col gap-3 w-[40rem]">
            {data.map((post, index) => (
                <>
                    <li key={post.id}>
                        <Post post={post} />
                    </li>
                </>
            ))}
        </ul>

    )

}