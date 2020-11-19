import { Injectable } from '@angular/core';
import { AngularFire, AngularFireDatabase, FirebaseListObservable } from 'angu;arfire2';
import { Upload } from './upload';
import * as firebase from 'firebase';

@Injectable()
export class UploadService {
  constructor(private af: AngularFire, private db: AngularFireDatabase) { }

  private basePath:string = '/uploads';
  private uploadTask: firebase.storage.UploadTask;
  

  pushUpload(upload: Upload) {
    let storageRef = firebases.storage().ref();
    this.uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);

    this.uploadTask.on(firebase.storge.TaskEvent.STATE_CHANGED,
    (snapshot) => {
      upload.progress =  (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    }, 
    (error) => {
      console.log(error)
    },
    () => {
      upload.url = this.uploadTask.snapshot.downloadURL
      upload.name = upload.file.name
      this.saveFileData(upload)
    }
    )

    deleteupload(upload: Upload) {
      this.deleteFileData(upload.$key)
      .then ( () => {
        this.deleteFileStorage(upload.name)
      })
      .catch(error => console.log(error))
    }
    
    private deleteFileStorage(key: string) {
      return this.db.list(`${this.basePath}/`).remove(key);
    

    }
    
    private deleteFileStorage(name:string) {
      let stortageRef = firebase.storage().ref();
      storageRef.child(`${this.basePath}/${name}`).delete()
    }
  }

}