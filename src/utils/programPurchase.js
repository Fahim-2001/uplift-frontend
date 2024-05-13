import axios from "axios";

export const handlePurchase = async (user, program) => {
  try {
    const apiData = {
      prgId: program?.prgId,
      prgName: program?.courseTitle,
      price: program?.offerPrice,
      studentId: user?.id,
      studentName: user?.firstName,
      studentEmail: user?.email,
    };
    
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    };
    const response = await axios.post(
      `${import.meta.env.VITE_PUBLIC_URL}/payment/1`,
      apiData,
      config
    );
    apiData.redirectUrl = response?.data?.redirectUrl;

    return apiData;
  } catch (error) {
    console.log(error.message);
  }
};
