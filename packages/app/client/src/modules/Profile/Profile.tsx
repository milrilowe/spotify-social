import { Button } from '@spotify-social/components';

interface Props {
    username: string;
}

export default function Profile({ username }: Props) {

    return (
        <div>
            <h1>Profile</h1>
            <p>Username: {username}</p>
            <Button>Click me</Button>
        </div>
    )
}