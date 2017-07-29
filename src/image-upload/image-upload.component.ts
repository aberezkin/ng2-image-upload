import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Headers } from '@angular/http';

import { ImageService } from './image.service';
import { Style } from "./style";
import { UploadMetadata } from './before-upload.interface';

export class FileHolder {
  public pending: boolean = false;
  public serverResponse: { status: number, response: any };

  constructor(public src: string, public file: File) { }
}

@Component({
  selector: 'image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  files: FileHolder[] = [];
  fileCounter: number = 0;
  fileOver: boolean = false;
  showFileTooLargeMessage: boolean = false;

  @Input() beforeUpload: (UploadMetadata) => UploadMetadata | Promise<UploadMetadata> = data => data;
  @Input() buttonCaption: string = 'Select Images';
  @Input('class') cssClass: string = 'img-ul';
  @Input() clearButtonCaption: string = 'Clear';
  @Input() dropBoxMessage: string = 'Drop your images here!';
  @Input() fileTooLargeMessage: string;
  @Input() headers: Headers | { [name: string]: any };
  @Input() max: number = 100;
  @Input() maxFileSize: number;
  @Input() preview: boolean = true;
  @Input() partName: string;
  @Input() style: Style;
  @Input('extensions') supportedExtensions: string[];
  @Input() url: string;
  @Input() withCredentials: boolean = false;
  @Output() removed: EventEmitter<FileHolder> = new EventEmitter<FileHolder>();
  @Output() uploadStateChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() uploadFinished: EventEmitter<FileHolder> = new EventEmitter<FileHolder>();

  @ViewChild('input')
  private inputElement: ElementRef;
  private pendingFilesCounter: number = 0;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    if (!this.fileTooLargeMessage) {
      this.fileTooLargeMessage = 'An image was too large and was not uploaded.' + (this.maxFileSize ? (' The maximum file size is ' + this.maxFileSize / 1024) + 'KiB.' : '');
    }
    this.supportedExtensions = this.supportedExtensions ? this.supportedExtensions.map((ext) => 'image/' + ext) : ['image/*'];
  }

  deleteAll() {
    this.files.forEach(f => this.removed.emit(f));
    this.files = [];
    this.fileCounter = 0;
    this.inputElement.nativeElement.value = '';
  }

  deleteFile(file: FileHolder): void {
    let index = this.files.indexOf(file);
    this.files.splice(index, 1);
    this.fileCounter--;
    this.inputElement.nativeElement.value = '';
    this.removed.emit(file);
  }

  onFileChange(files: FileList) {
    let remainingSlots = this.countRemainingSlots();
    let filesToUploadNum = files.length > remainingSlots ? remainingSlots : files.length;

    if (this.url && filesToUploadNum != 0) {
      this.uploadStateChanged.emit(true);
    }

    this.fileCounter += filesToUploadNum;
    this.showFileTooLargeMessage = false;
    this.uploadFiles(files, filesToUploadNum);
  }

  onFileOver = (isOver) => this.fileOver = isOver;

  private countRemainingSlots = () => this.max - this.fileCounter;

  private onResponse(response, fileHolder: FileHolder) {
    fileHolder.serverResponse = response;
    fileHolder.pending = false;

    this.uploadFinished.emit(fileHolder);

    if (--this.pendingFilesCounter == 0) {
      this.uploadStateChanged.emit(false);
    }
  }

  private async uploadFiles(files: FileList, filesToUploadNum: number) {
    for (let i = 0; i < filesToUploadNum; i++) {
      const file = files[i];

      if (this.maxFileSize && file.size > this.maxFileSize) {
        this.fileCounter--;
        this.inputElement.nativeElement.value = '';
        this.showFileTooLargeMessage = true;
        continue;
      }

      const beforeUploadResult: UploadMetadata = await this.beforeUpload({ file, url: this.url, abort: false });

      if (beforeUploadResult.abort) {
        this.fileCounter--;
        this.inputElement.nativeElement.value = '';
        continue;
      }

      const img = document.createElement('img');
      img.src = window.URL.createObjectURL(beforeUploadResult.file);

      const reader = new FileReader();
      reader.addEventListener('load', (event: any) => {
        const fileHolder: FileHolder = new FileHolder(event.target.result, beforeUploadResult.file);
        this.uploadSingleFile(fileHolder, beforeUploadResult.url);
        this.files.push(fileHolder);
      }, false);
      reader.readAsDataURL(beforeUploadResult.file);
    }
  }

  private uploadSingleFile(fileHolder: FileHolder, url = this.url) {
    if (url) {
      this.pendingFilesCounter++;
      fileHolder.pending = true;

      this.imageService
        .postImage(this.url, fileHolder.file, this.headers, this.partName, this.withCredentials)
        .subscribe(
        response => this.onResponse(response, fileHolder),
        error => {
          this.onResponse(error, fileHolder);
          this.deleteFile(fileHolder);
        });
    } else {
      this.uploadFinished.emit(fileHolder);
    }
  }
}
