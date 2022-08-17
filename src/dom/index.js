import {install} from "../index";
import Image from "./Image.vue";
import ErrorImage from "./ErrorImage.vue";

Image.install = install.bind(Image)
ErrorImage.install = install.bind(ErrorImage)


export {
    Image as UnjImage,
    ErrorImage as UnjErrorImage
}