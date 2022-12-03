import { userWeb3Methods } from "../../helper/web3Methods";

export const getParticipanteHistoryLength = async (address: any) => {
  try {
    const methods = await userWeb3Methods();
    const length = await methods
      .getParticipanteHistoryLength(address)
      .call()
      .catch((err: any) => console.log(err));
    return {
      success: true,
      data: length,
      message: "",
    };
  } catch (error) {
    return {
      success: false,
      data: null,
      message: "Failed to get participante-history length",
    };
  }
};
