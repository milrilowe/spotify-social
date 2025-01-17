import { postsList } from '@/modules/Profile/data';
import { useHover } from '@spotify-social/hooks';
import { Heart, SpeechBubble } from '@spotify-social/icons';

interface Props {
    post: typeof postsList[0];
}

export default function Posts({ post }: Props) {
    const [ref, isHovered] = useHover<HTMLDivElement>();

    return (
        <div key={post.id} className="flex flex-col gap-1" ref={ref}>
            <div className="relative">
                <img
                    src={post.song.album.image}
                    alt={post.song.title}
                    className="w-full"
                />

                {isHovered ? (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-12">
                        <div className="flex items-center gap-2 text-white">
                            <Heart className="w-8 h-8 fill-white" />
                            <span className="text-xl font-medium">35</span>
                        </div>
                        <div className="flex items-center gap-2 text-white">
                            <SpeechBubble className="w-8 h-8" />
                            <span className="text-xl font-medium">6</span>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
}