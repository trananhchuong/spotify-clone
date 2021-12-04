import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";

import spotifyImage from "../static/images/spotify-logo.png";

function Login(props) {
  const { providers } = props;

  const handleOnLogin = (provider) => {
    signIn(provider.id, { callbackUrl: "/" });
  };

  return (
    <div className="flex flex-col items-center justify-center bg-black min-h-screen w-full">
      <div
        style={{
          minHeight: "96px",
          width: "13rem",
          position: "relative",
        }}
        className="w-52 mb-5"
      >
        <Image
          layout="fill"
          objectFit="contain"
          src={spotifyImage}
          className="pointer"
          alt="spotify logo"
        />
      </div>
      {Object.values(providers).map((provider) => {
        return (
          <div key={provider.name}>
            <button
              className="bg-[#18D860] text-white p-5 rounded-full"
              onClick={() => handleOnLogin(provider)}
            >
              Login with {provider.name}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
