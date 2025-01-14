import { AspectRatio } from '@spotify-social/components';
import { postsList } from '@/modules/Profile/data';

interface Props {
    posts: typeof postsList;
}

export default function Posts({ posts }: Props) {

    return (
        <>
            {
                posts.map((post, index) => (
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
                ))
            }
        </>
    )

}

export { Posts };