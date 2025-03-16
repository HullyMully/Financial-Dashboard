import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import SignInForm from '../../components/auth/SignInForm';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

const SignInPage = () => {
  return <SignInForm />;
};

export default SignInPage; 