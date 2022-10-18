import ImageUrlBuilder from "@sanity/image-url";
import sanityClient from "@sanity/client";

const client = sanityClient({
    projectId: "xyaza1mr",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21",
})

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
