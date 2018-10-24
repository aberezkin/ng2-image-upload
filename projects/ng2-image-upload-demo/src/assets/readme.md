[![Build Status](https://travis-ci.org/aberezkin/ng2-image-upload.svg?branch=master)](https://travis-ci.org/aberezkin/ng2-image-upload)

This angular library provides a light-weight component that handles file-drop, image previewing and image uploading.

### Install

````text
npm install angular2-image-upload --save
````

or

````text
yarn add angular2-image-upload
````

### Usage

In your `app.module.ts` import it using `@NgModule` decorator.
  
````typescript
import { ImageUploadModule } from "angular2-image-upload";

@NgModule({
    imports: [
        ...,
        ImageUploadModule.forRoot(),
        ...
    ]
})
````

Now you have `image-upload` declaration and you can use it in your html code.

`<image-upload></image-upload>`

You can use bindings to configure this element for your needs.

#### General customization

`[max]="100"` - is the maximum number of pictures that can be uploaded through this element. Default is 100.

`[url]="'example.com/images/upload'"` - this is the url which can handle POST queries with `multipart/form-data` 
Content-Type. The query has a single field called `image`. 

`[partName]="'your-field-name'"` - if you need to customize the default POST field `image`

**Note:** images are sent individually one by one!

`[preview]="false"` - you can disable images preview.

`[maxFileSize]="1048576"` - the maximum file size that will be accepted, in bytes. No default (any size permitted).

`[extensions]="['jpg','png','gif']"` - upload images with specific extensions. Default all extensions `image/*` is allowed.

`[uploadedFiles]="['http://example.com/path/to/my/file', {'fileName': 'fileName.jpg', url: 'http://example.com/path/to/my/file'}]"` - enters the uploaded files from the previous time.

#### Custom headers

If you need to send some headers with your request (for example `Authorization` headers), 
you can use `[headers]` directive like this.

````html
<image-upload 
  [url]="'my-url.com'"
  [headers]="{Authorization: 'MyToken'}">
</image-upload>
````

**Note** that headers are sent only if you provide a url.

#### Custom messages

`[buttonCaption]="'Select Images'"` - that is a button caption. Default is "**Select Images**". Note that letters on the button are all caps.

`[dropBoxMessage]="'Drop your images here!'"` - this is a message that is shown in drop area. Default is "**Drop your images here!**".

`[fileTooLargeMessage]="'Image too large!'"` - message that is shown if the user selects/drops an image that exceeds `maxFileSize`. Default is "**An image was too large and was not uploaded. The maximum file size is x KiB.**".

`[clearButtonCaption]="'Clear'"` - Text shown on the "Clear" button. Default is "**Clear**".

#### CSS Class

`[class]="'customClass'"` - Set custom class for this component. It is set on parent level element `<image-upload>` which can be customized as follow :

````css
.customClass {
    background-color: #dd3;
    border-radius: 5px;
    margin:5px;
    width: 500px;
}

.customClass .img-ul-upload {
    background-color: #000 !important;
}

.customClass .img-ul-clear {
    background-color: #B819BB !important;
}

.customClass .img-ul-drag-box-msg {
    color: purple !important;
}

.customClass .img-ul-container {
    background-color: #FF6CAD !important;
}
````


**The class must be accessible to the ImageUploadComponent**, so either pop it in your global stylesheet, or if you need to put it in a scoped stylesheet prefix with `/deep/`:

`/deep/ .customClass { ... }`
    
**Note:**  `.img-ul-*` classes which are overridden with new styles. 

#### Custom Style


`[style]="'customStyle'"` - Set custom style properties for this component. `customStyle` is typescript object defined in your component.

````typescript
customStyle = {
  selectButton: {
    "color": "white",
    "background-color": "purple",
  },
  clearButton: {
    "color": "white",
    "background-color": "yellow",
  },
  layout: {
    "background-color": "black",
    "color": "red",
    "font-size": "15px",
  },
  previewPanel: {
    "background-color": "red",
  }
};
````
      
**Note:** `selectButton`, `clearButton`, `layout` and `previewPanel` are optional properties.

#### Events

`(uploadFinished)="onUploadFinished($event)"`. If `[url]` is specified this event is fired when component gets a response from the server, also in this case event has field `serverResponse` which contains the status code and response from the server `{status, response}`. If `[url]` is not specified it's fired immediately after an image(s) dropped into file-drop zone of choosed in file browser. So what you can do, is not specify `[url]` to handle upload yourself, for exapmple send the image into firebase storage. To get file use `event.file`.

`(removed)="onRemoved($event)"` - this event is fired when remove or clear button was clicked and the image preview was removed. *Note that this library doesn't handle deletion from server so you should do it yourself*. Event passed as the argument is the exact same object that was passed to the `(imageUploaded)` callback when image was added so you can access `serverResponse` to get a key to delete your image from server.

`(uploadStateChanged)="onUploadStateChanged($event)"` - this event is fired when image upload state was changed. Event is just a boolean that represents the uploading state. Image upload state is `true` when and only when component awaits the response from the server, and `false` otherwise. You can use it, for example, to disable send button in your form until all images are uploaded.

In the final state it should look something like this:

````html
<image-upload
  [max]="100"
  [url]="'example.com/images/upload'"
  [headers]="{Authorization: 'MyToken'}"
  [buttonCaption]="'Select Images!'"
  [dropBoxMessage]="'Drop your images here!'"
  [extensions]="['jpg','png','gif']"
  [uploadedFiles]="['http://example.com/path/to/my/file']"
  [class]="'customClass'"      
  (removed)="onRemoved($event)"
  (uploadFinished)="onUploadFinished($event)"
  (uploadStateChanged)="onUploadStateChanged($event)">
</image-upload>
````

# Contributors

@aberezkin
@UncleDave
@sabrio
