import { Separator, Skeleton } from '@spotify-social/components';
import { profileData, postsList } from './data';
import { BioSection, Post, AvatarSection } from './components';
import { api } from '@/utils/trpc';
import { useAuth } from '@/context/auth';

interface Props {
    username: string;
}

export default function Profile({ username }: Props) {
    const profile = profileData;
    const posts = postsList;

    const { spotify_id } = useAuth()
    const user = api.user.getUser.useQuery({ userId: username })

    if (user.isLoading) return (

        <div className="flex flex-col gap-3 w-[40rem]">
            <div className="grid grid-cols-3 gap-4 items-center">
                <div className="flex justify-center items-center">
                    <Skeleton className='w-36 h-36 rounded-full' />
                </div>
                <div className="col-span-2 flex flex-col gap-2">
                    <Skeleton className='w-60 h-8' />
                    <Skeleton className='w-80 h-6' />
                    <Skeleton className='w-80 h-6' />
                </div>
            </div>
            <Separator />
            <div className="grid grid-cols-3 gap-1">
                <Skeleton className='w-full aspect-square' />
                <Skeleton className='w-full aspect-square' />
                <Skeleton className='w-full aspect-square' />
                <Skeleton className='w-full aspect-square' />
                <Skeleton className='w-full aspect-square' />
            </div>
        </div>

    )

    const isOwner = user.data?.id === spotify_id;

    return (
        <>
            {user.data && <div className="flex flex-col gap-2 w-[40rem]">
                <div className="grid grid-cols-3 gap-4 items-center">
                    <AvatarSection profile={user.data} />
                    <BioSection username={user.data.display_name} profile={profile} />
                </div>

                <Separator />

                <div className="grid grid-cols-3 gap-1">
                    {posts.map((post) => (
                        <Post post={post} key={post.id} />
                    ))}
                </div>
            </div>
            }
        </>
    )
}