import { Avatar, AvatarFallback, AvatarImage } from "@spotify-social/components";
import data from "../data";

interface Props {
    data: typeof data;
}

export default function AvatarSection({ data }: Props) {

    return (
        <div className="flex justify-center items-center">
            <Avatar className="w-36 h-36">
                <AvatarImage src={data.user.avatar} />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    )
}