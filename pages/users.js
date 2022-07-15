import axios from "axios";

const user = ({ user }) => {
  const userName = user && user.name;
  return (
    <div>
      <div>유저 이름 :</div>
      <div>{userName}</div>
    </div>
  );
};

// getServerSideProps는 해당 페이지의 쿼리 객체를 인자로 가집니다.
export const getServerSideProps = async ({ query }) => {
  // 이 페이지의 파일명은 [user].jsx 이므로 쿼리 객체는 {user: "쿼리 인자명"} 이 됩니다.
  const { user } = query;
  try {
    const res = await axios.get(`https://api.github.com/users/${user}`);
    if (res.status === 200) {
      const user = res.data;
      return {
        props: { user },
      };
    }
  } catch (err) {
    console.log(err);
    return {
      props: {},
    };
  }
};

export default user;
