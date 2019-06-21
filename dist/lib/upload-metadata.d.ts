export interface UploadMetadata {
    file: File;
    url: string;
    abort: boolean;
    formData?: {
        [name: string]: string | Blob;
    };
}
