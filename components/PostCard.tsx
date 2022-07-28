import Image from 'next/image';
import PostCardBody from '@components/PostCardBody';

const PostCard: React.FC = () => (
  <div className="card">
    <Image
      className="card-img-top"
      src="/test.jpeg"
      alt="main-image"
      width="100%"
      height="100%"
    />
    <PostCardBody />
  </div>
);

export default PostCard;
