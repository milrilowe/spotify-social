import { Avatar, AvatarFallback, AvatarImage } from "@spotify-social/components";
import { RouterOutputs } from "@/utils/trpc";

interface Props {
    profile: RouterOutputs['user']['getUser']
}

export default function AvatarSection({ profile }: Props) {

    return (
        <div className="flex justify-center items-center">
            <Avatar className="w-36 h-36">
                <AvatarImage src={profile.images[0].url} />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    )
}

export { AvatarSection };