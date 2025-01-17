import { Separator } from '@spotify-social/components';
import { Post } from './components';
import data from './data';

interface Props {

}

export default function Feed({ }: Props) {

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