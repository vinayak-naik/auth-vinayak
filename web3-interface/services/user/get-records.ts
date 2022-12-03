import { userWeb3Methods } from "../../helper/web3Methods";

export const getRecords = async (
  address: any,
  totalRecords: number,
  from: number,
  to: number
) => {
  try {
    const methods = await userWeb3Methods();
    const recordsArr = [];
    for (let i = from; i < to; i++) {
      if (i < Number(totalRecords)) {
        const record = await methods
          .getParticipanteHistory(address, i)
          .call()
          .catch((err: any) => console.log(err));
        recordsArr.push({
          id: Number(record.id),
          category: Number(record.category),
          amount: Number(record.amount),
          teamSelected: Number(record.teamSelected),
        });
      }
    }
    return {
      success: true,
      data: recordsArr,
      message: "",
    };
  } catch (error) {
    return {
      success: false,
      data: null,
      message: "Failed to get records",
    };
  }
};
