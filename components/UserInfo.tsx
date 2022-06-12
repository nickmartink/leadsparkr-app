import useSWR from 'swr';
import { fetcher } from '../api-store';

const UserInfo = () => {

    const { data: user, error } = useSWR('/user', fetcher);

    if (!user) {
        return (<p className="flex-shrink-0 w-full group block">Loading user info</p>);
    }

    if (error) return <p>There was an error.</p>;

    return (
        <a href="#" className="flex-shrink-0 w-full group block">
            <div className="flex items-center">
                <div>
                    <img
                        className="inline-block h-9 w-9 rounded-full"
                        src={user.avatar}
                        alt="User avatar"
                    />
                </div>
                <div className="ml-3">
                    <p className="text-sm font-medium text-white">{user.first_name} {user.last_name}</p>
                    <p className="text-xs font-medium text-indigo-200 group-hover:text-white">View profile</p>
                </div>
            </div>
        </a>
    );
};

export default UserInfo;