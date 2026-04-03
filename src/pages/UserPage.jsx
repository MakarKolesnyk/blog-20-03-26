import PostListByUser from '../Components/PostsList/PostListByUser';
import UserProfile from '../Components/UserProfile/UserProfile';

const UserPage = () => {
    return (
        <div>
            <UserProfile/>
            <h2>My post</h2>
            <PostListByUser/>
        </div>
    );
}

export default UserPage;
