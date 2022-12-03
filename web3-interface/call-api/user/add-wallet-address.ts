export const addWalletAddressApiCall = async (props: any) => {
  const { walletAddress, token } = props;

  const participateUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/user/add-wallet-address`;

  const response: any = await fetch(participateUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ walletAddress, token }),
  }).catch((err: any) => console.log(err));
  const res = await response.json();
  if (res.success === false) return false;
  return true;
};
