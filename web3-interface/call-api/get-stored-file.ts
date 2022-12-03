export const getStoredFile = async (fileName: string) => {
  try {
    const path = `${process.env.NEXT_PUBLIC_APP_URL}/api/get-file`;
    const res = await fetch(`${path}/${fileName}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Failed to fetch stored file");
    return {
      success: false,
      data: null,
      message: "Failed to fetch stored file",
    };
  }
};
