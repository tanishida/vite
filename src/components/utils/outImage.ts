import { Jimp } from "jimp";

export const outImage = async (images: string[]) => {
    const baseImage = await Jimp.read("/background.jpg");
}

