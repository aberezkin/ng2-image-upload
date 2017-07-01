import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import { Header, ImageService } from '../image.service';

export class FileHolder {
  public pending: boolean = false;
  public serverResponse: { status: number, response: any };

    constructor(public src: string, public file: File) {}

}

@Component({
  selector: 'image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  files: FileHolder[] = [];
  fileCounter: number = 0;
  isFileOver: boolean = false;
  showFileTooLargeMessage: boolean = false;

  @Input() buttonCaption: string = 'Select Images';
  @Input() dropBoxMessage: string = 'Drop your images here!';
  @Input() fileTooLargeMessage: string;
  @Input() headers: Header[];
  @Input() max: number = 100;
  @Input() maxFileSize: number;
  @Input() preview: boolean = true;
  @Input() partName: string;
  @Input('extensions') supportedExtensions: string[];
  @Input() url: string;
  @Input() withCredentials: boolean = false;
  @Output() remove: EventEmitter<FileHolder> = new EventEmitter<FileHolder>();
  @Output() uploadStateChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() uploadFinish: EventEmitter<FileHolder> = new EventEmitter<FileHolder>();

  @ViewChild('input')
  private inputElement: ElementRef;
  private pendingFilesCounter: number = 0;

  constructor(private imageService: ImageService) {
  }

  ngOnInit() {
    if (!this.fileTooLargeMessage) {
      this.fileTooLargeMessage = 'An image was too large and was not uploaded.' + (this.maxFileSize ? (' The maximum file size is ' + this.maxFileSize / 1024) + 'KiB.' : '');
    }
    this.supportedExtensions = this.supportedExtensions ? this.supportedExtensions.map((ext) => 'image/' + ext) : ['image/*'];
  }

  deleteAll() {
    this.files.forEach(f => this.remove.emit(f));
    this.files = [];
    this.fileCounter = 0;
    this.inputElement.nativeElement.value = '';
  }

  deleteFile(file: FileHolder): void {
    let index = this.files.indexOf(file);
    this.files.splice(index, 1);
    this.fileCounter--;
    this.inputElement.nativeElement.value = '';
    this.remove.emit(file);
  }

  fileChange(files: FileList) {
    let remainingSlots = this.countRemainingSlots();
    let filesToUploadNum = files.length > remainingSlots ? remainingSlots : files.length;

    if (this.url && filesToUploadNum != 0) {
      this.uploadStateChange.emit(true);
    }

    this.fileCounter += filesToUploadNum;
    this.showFileTooLargeMessage = false;
    this.uploadFiles(files, filesToUploadNum);
  }

  fileOver(isOver) {
    this.isFileOver = isOver;
  }

  private countRemainingSlots() {
    return this.max - this.fileCounter;
  }

  private onResponse(response, fileHolder: FileHolder) {
    fileHolder.serverResponse = response;
    fileHolder.pending = false;

    this.uploadFinish.emit(fileHolder);

    if (--this.pendingFilesCounter == 0) {
      this.uploadStateChange.emit(false);
    }
  }

  private uploadFiles(files: FileList, filesToUploadNum: number) {
    for (let i = 0; i < filesToUploadNum; i++) {
      let file = files[i];

      if (this.maxFileSize && file.size > this.maxFileSize) {
        this.showFileTooLargeMessage = true;
        continue;
      }

      let img = document.createElement('img');
      img.src = window.URL.createObjectURL(file);

      let reader = new FileReader();
      reader.addEventListener('load', (event: any) => {
        let fileHolder: FileHolder = new FileHolder(event.target.result, file);

        this.uploadSingleFile(fileHolder);

        this.files.push(fileHolder);

      }, false);


      reader.readAsDataURL(file);
    }
  }

  private uploadSingleFile(fileHolder: FileHolder) {
    if (this.url) {
      this.pendingFilesCounter++;
      fileHolder.pending = true;

      this.imageService
        .postImage(this.url, fileHolder.file, this.headers, this.partName, this.withCredentials)
        .subscribe(
        response => this.onResponse(response, fileHolder),
        error => {
          this.onResponse(error, fileHolder);
          this.deleteFile(fileHolder);
        }
        );
    } else {
      this.uploadFinish.emit(fileHolder);
    }
  }
}