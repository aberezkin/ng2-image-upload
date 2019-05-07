import { HttpResponse } from '@angular/common/http';
export declare class FileHolder {
    src: string;
    file: File;
    pending: boolean;
    serverResponse: {
        status: number;
        response: HttpResponse<any>;
    };
    constructor(src: string, file: File);
}
