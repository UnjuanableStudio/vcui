import {install} from "../index";
import Image from "./Image.vue";

Image.install = install.bind(Image)

export {
    Image as UnjImage,
}