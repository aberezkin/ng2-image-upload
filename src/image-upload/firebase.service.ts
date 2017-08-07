import { Injectable, InjectionToken, Inject } from '@angular/core';
import { Headers, Http, RequestOptions, RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { FirebaseAppConfigToken, FirebaseAppConfig } from '../image-upload.module';
import * as firebase from 'firebase';
import uuid = require('uuid/v4');

@Injectable()
export class FirebaseService {
    private config: Object;

    constructor( @Inject(FirebaseAppConfigToken) private FirebaseAppConfigToken: FirebaseAppConfig) {
        firebase.initializeApp(this.FirebaseAppConfigToken);
    }

    public postImageToBucket(image: File, firebaseFolderName?: string, firebaseImageNameRandom?: boolean): firebase.Promise<any> {

        let fileName = image.name;
        let folder = "UploadedImage";

        if (firebaseImageNameRandom) {
            fileName = uuid();
        }

        if (firebaseFolderName) {
            folder = firebaseFolderName;
        }

        if (!firebase.apps.length) {

        }


        let storageRef = firebase.storage().ref();
        let path = `/${folder}/${fileName}`;
        var iRef = storageRef.child(path);

        return iRef.put(image).then((snapshot) => { return snapshot.downloadURL });


    }
}
