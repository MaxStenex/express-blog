import api from "../../api";

type GetArticleImageType = {
  imageBuffer: string;
  contentType: string;
};

const getArticleImage = async (requestUrl: string): Promise<GetArticleImageType> => {
  const response = await api.get(requestUrl, {
    responseType: "arraybuffer",
  });
  return {
    imageBuffer: Buffer.from(response.data, "binary").toString("base64"),
    contentType: response.headers["content-type"],
  };
};

export default getArticleImage;
