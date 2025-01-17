import { postsList } from '@/modules/Profile/data';
import { Avatar, AvatarImage, Dialog, DialogContent, DialogTrigger } from '@spotify-social/components';
import { useHover } from '@spotify-social/hooks';
import { Heart, More, SpeechBubble } from '@spotify-social/icons';
import { useState } from 'react';

interface Props {
    post: typeof postsList[0];
}

export default function Post({ post }: Props) {
    const [ref, isHovered] = useHover<HTMLDivElement>();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div key={post.id} className="flex flex-col gap-1" ref={ref}>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <div className="relative">
                    <img
                        src={post.song.album.image}
                        alt={post.song.title}
                        className="w-full"
                    />

                    <DialogTrigger asChild>
                        {isHovered && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-12 cursor-pointer">
                                <div className="flex items-center gap-2 text-white">
                                    <Heart className="w-8 h-8 fill-white" />
                                    <span className="text-xl font-medium">35</span>
                                </div>
                                <div className="flex items-center gap-2 text-white">
                                    <SpeechBubble className="w-8 h-8" />
                                    <span className="text-xl font-medium">6</span>
                                </div>
                            </div>
                        )}
                    </DialogTrigger>
                </div>

                <DialogContent className="max-w-fit p-0 gap-0">
                    <div className="flex h-[calc(100vh-120px)] max-h-[1000px]">
                        {/* Left side - Image */}
                        <div className="aspect-square bg-black flex items-center">
                            <img
                                src={post.song.album.image}
                                alt={post.song.title}
                                className="h-full w-full object-contain"
                            />
                        </div>

                        {/* Right side - Comments and Interactions */}
                        <div className="w-[350px] flex flex-col border-l">
                            {/* Header */}
                            <div className="flex items-center justify-between p-4 border-b">
                                <div className="flex items-center gap-3">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src={'post.user.avatar'} alt={'post.user.name'} />
                                    </Avatar>
                                    <span className="font-medium">{'post.user.name'}</span>
                                </div>
                                <button>
                                    <More className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Comments Section */}
                            <div className="flex-1 overflow-y-auto p-4">
                                {/* Original post caption */}
                                <div className="flex gap-3 mb-4">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src={'post.user.avatar'} alt={'post.user.name'} />
                                    </Avatar>
                                    <div>
                                        <span className="font-medium mr-2">{'post.user.name'}</span>
                                        <span>{'post.caption'}</span>
                                    </div>
                                </div>
                                {/* Add actual comments here */}
                            </div>

                            {/* Footer - Interactions */}
                            <div className="border-t p-4">
                                <div className="flex gap-4 mb-4">
                                    <button>
                                        <Heart className="w-6 h-6" />
                                    </button>
                                    <button>
                                        <SpeechBubble className="w-6 h-6" />
                                    </button>
                                </div>
                                <div className="font-medium mb-2">35 likes</div>
                                <div className="text-sm text-muted-foreground mb-4">
                                    November 23, 2024
                                </div>
                                {/* Comment input */}
                                <div className="flex items-center gap-2">
                                    <input
                                        type="text"
                                        placeholder="Add a comment..."
                                        className="flex-1 bg-transparent outline-none"
                                    />
                                    <button className="text-primary font-medium">Post</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}