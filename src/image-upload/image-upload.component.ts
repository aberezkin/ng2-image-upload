import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ImageService} from "../image.service";

class FileHolder {
  public serverResponse: any;
  public pending: boolean = false;
  constructor(private src: string, public file: File) { }
}

@Component({
  selector: 'image-upload',
  templateUrl: 'image-upload.component.html',
  styleUrls: ['image-upload.component.css'],
})
export class ImageUploadComponent {
  @Input() max: number = 100;
  @Input() url: string;

  @Output()
  private isPending: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output()
  private onFileUploadFinish: EventEmitter<FileHolder> = new EventEmitter<FileHolder>();
  @Output()
  private onRemove: EventEmitter<FileHolder> = new EventEmitter<FileHolder>();

  private files: FileHolder[] = [];

  private fileCounter: number = 0;
  private pendingFilesCounter: number = 0;

  private isFileOver:boolean = false;

  private buttonMessage: string = "Select Files";
  private dragBoxMessage: string = "Drop your files here!";
  private dropMessage: string = "Release mouse to upload";

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.imageService.setUrl(this.url);
  }

  fileChange(files) {
    let remainingSlots = this.countRemainingSlots();
    let filesToUploadNum = files.length > remainingSlots ? remainingSlots : files.length;

    if (this.url && filesToUploadNum != 0) {
      this.isPending.emit(true);
    }

    this.fileCounter += filesToUploadNum;

    this.uploadFiles(files, filesToUploadNum);
  }

  private uploadFiles(files, filesToUploadNum) {
    for (var i = 0; i < filesToUploadNum; i++) {
      let file = files[i];

      let img = document.createElement('img');
      img.src = window.URL.createObjectURL(file);

      var reader = new FileReader();
      reader.addEventListener('load', (event: any) => {
        let fileHolder: FileHolder = new FileHolder(event.target.result, file);

        this.uploadSingleFile(fileHolder);

        this.files.push(fileHolder);

      }, false);


      reader.readAsDataURL(file);
    }
  }

  private uploadSingleFile(fileHolder: FileHolder) {
    this.pendingFilesCounter++;

    if (this.url) {
      fileHolder.pending = true;
      this.imageService.postImage(fileHolder.file).subscribe(response => {
        fileHolder.serverResponse = response;
        this.onFileUploadFinish.emit(fileHolder);
        fileHolder.pending = false;
        if (--this.pendingFilesCounter == 0) {
          this.isPending.emit(false);
        }
      });
    } else {
      this.onFileUploadFinish.emit(fileHolder);
    }
  }

  deleteFile(file: FileHolder): void {
    let index = this.files.indexOf(file);
    this.files.splice(index, 1);
    this.fileCounter--;

    this.onRemove.emit(file);
  }

  fileOver(isOver) {
    this.isFileOver = isOver;
  }

  private countRemainingSlots() {
    return this.max - this.fileCounter;
  }


  get value():FileHolder[] {
    return this.files;
  }
}
