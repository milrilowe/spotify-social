import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@spotify-social/components";
import { Search } from "@spotify-social/icons";
import { followersList } from '@/modules/Profile/data';
import { useState } from "react";


interface Props {
    numberOfFollowers: number;
    followers: typeof followersList;
}

export default function Followers({ numberOfFollowers, followers }: Props) {
    const [search, setSearch] = useState('');

    const filteredFollowers = followers.filter((follower) => {
        return follower.name.toLowerCase().includes(search.toLowerCase()) || follower.username.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <Dialog>
            <DialogTrigger>{numberOfFollowers} followers</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-xl font-semibold mb-4">
                        Followers
                    </DialogTitle>
                </DialogHeader>

                <div className="relative mb-4">
                    <Search size={20} className="absolute top-2 left-2" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full bg-gray-100 rounded-lg pl-10 pr-4 py-2 text-sm"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                {filteredFollowers.length > 0 ? (
                    <div className="space-y-4 max-h-96 overflow-y-auto">
                        {filteredFollowers.map((follower) => (
                            <div key={follower.id} className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={follower.avatar}
                                        alt={`${follower.name}'s avatar`}
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <div>
                                        <p className="font-medium">{follower.username}</p>
                                        <p className="text-sm text-gray-500">{follower.name}</p>
                                    </div>
                                </div>
                                <button className="bg-blue-500 text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-600">
                                    Follow
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500">No results found.</p>
                )}
            </DialogContent>
        </Dialog>
    )
}

export { Followers };