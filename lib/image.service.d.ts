export interface Header {
    header: string;
    value: string;
}
export declare class ImageService {
    private url;
    setUrl(url: string): void;
    postImage(image: File, headers?: Header[]): any;
    private checkUrl();
}
