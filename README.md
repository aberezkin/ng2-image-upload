# Image Upload Module

This angular 2 library provides a light-weight component that handles file-drop, image previewing and image uploading.

### Install

`npm install angular2-image-upload --save`

### Usage

In your `app.module.ts` import it using `@NgModule` decorator.

    @NgModule({
        imports: [
            ...,
            ImageUploadModule.forRoot(),
            ...
        ]
    })

Now you have `image-upload` declaration and you can use it in your html code.

    <image-upload></image-upload>

You can use bindings to configure this element for your needs.

#### General customization

`[max]="100"` - is the maximum number of pictures that can be uploaded through this element. Default is 100.

`[url]="'example.com/images/upload'"` - this is the url which can handle POST queries with `multipart/form-data` 
Content-Type. The query has a single field called `image`.

**Note:** images are sent individually one by one!

#### Custom headers

If you need to send some headers with your request (for example `Authorization` headers), 
you can use `[headers]` directive like this.

    <image-upload [url]="'my-url.com'"
      [headers]="[
        {header: 'Authorization, value: 'MyToken'}
      ]"></image-upload>

**Note** that headers are sent only if you provide a url.

#### Custom messages

`[buttonCaption]="'Select Images'"` - that is a button caption. Default is "**Select Images**". Note that letters on the button are all caps.

`[dropBoxMessage]="'Drop your images here!'"` - this is a message that is shown in drop area. Default is "**Drop your images here!**".

#### Callbacks

`(onFileUploadFinish)="imageUploaded($event)"`. If `[url]` is specified this event is fired when component gets a responce from the server, also in this case event has field `serverResponse` which contains object returned by the server. If `[url]` is not specified it's fired immediately after an image(s) dropped into file-drop zone of choosed in file browser. So what you can do, is not specify `[url]` to handle upload yourself, for exapmple send the image into firebase storage. To get file use `event.file`.

`(onRemove)="imageRemoved($event)"` - this event is fired when remove button was clicked and the image preview was removed. *Note that this library doesn't handle deletion from server so you should do it yourself*. Event passed as the argument is the exact same object that was passed to the `(imageUploaded)` callback when image was added so you can access `serverResponse` to get a key to delete your image from server.

`(isPending)="disableSendButton($event)"` - this event is fired when pending state was changed. Event is just a boolean that represents the pending state. Pending state is `true` when and only when component avaits a response from the server, and `false` othervise. You can use it, for example, to disable send button in your form until all images are uploaded.

In the final state it should look something like this:

    <image-upload
      [max]="100"
      [url]="'example.com/images/upload'"
      [headers]="[
        {header: 'Authorization, value: 'MyToken'}
      ]"
      [buttonCaption]="'Select Images!'"
      [dropBoxMessage]="'Drop your images here!'"
      (onFileUploadFinish)="imageUploaded($event)"
      (onRemove)="imageRemoved($event)"
      (isPending)="disableSendButton($event)"
    ></image-upload>
