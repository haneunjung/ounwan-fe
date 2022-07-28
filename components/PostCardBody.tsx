import Image from 'next/image';

const PostCardBody: React.FC = () => (
  <div className="card-body">
    <div className="card-text p-2">Main Text Here</div>
    <div className="d-flex align-items-center justify-content-between p-2">
      <small>3분전</small>
      <Image
        className="rounded-circle border"
        src="/vercel.svg"
        width={32}
        height={32}
        alt="user avatar"
      />
    </div>
  </div>
);

export default PostCardBody;
