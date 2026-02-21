import { useSelector } from 'react-redux';

function Username() {
  const userName = useSelector((state) => state.user.userName);

  if (!userName) return null;

  return (
    <div>
      <p className="hidden text-sm font-semibold md:block">{userName}</p>
    </div>
  );
}

export default Username;
