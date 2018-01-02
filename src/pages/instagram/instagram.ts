import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImageProvider } from '../../providers/image-provider';
// import * as firebase from 'firebase';

@Component({
  selector: 'page-instagram',
  templateUrl: 'instagram.html',
})
export class Instagram {

  private images = [];
  imageUrls = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private afAuth: AngularFireAuth, private camera: Camera, private imageSrv: ImageProvider) {
      let data = localStorage.getItem('images');
      if (data) {
        this.images = JSON.parse(data);
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Instagram');
      console.log(this.afAuth.auth.currentUser.uid);
  }

  takePicture() {
    const cameraOptions: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(cameraOptions)
      .then(data => {
        let base64Image = 'data:image/jpeg;base64,' + data;
        return this.imageSrv.uploadImage(base64Image, this.afAuth.auth.currentUser.uid)
      })
      .then(data => {
        this.images.push(data.a.name);
        localStorage.setItem('images', JSON.stringify(this.images));
        alert(this.images);
        this.downloadImageUrls();
      });
  }

  downloadImageUrls() {
    let promiseList = [];
    for (let i = 0; i < this.images.length; i++) {
      let promise = this.imageSrv.getImage(this.afAuth.auth.currentUser.uid, this.images[i]);
      promiseList.push(promise);
    }

    Promise.all(promiseList).then(urls => {
      this.imageUrls = urls;
      console.log(urls);
    })
  }

  takePictureMock() {
    let base64Image = 'data:image/jpeg;base64,' + `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
    nMZ0aHjrS2Vtgzz9yhaeREQ11Al0BOyNA3Fq7sY2ULDTOKcVnRre+sKldvQf6iURCXUCHQFraXfK
    438q1vb4aZxT/PnRrOGtLyvXbZOCfWU8oYh6qBPoCErJSf0uvV+Axjklpc3K1a7hzZ/ismp5bNkG
    nlAEFuo15oY6gY6gvbY3QfvNW841zpWso3EuhpLHj5YR+b9XblRrqB5duponFTELdQIdIXlidbk0
    Nrdo/3MYYzPPNc4Zk7N5YqPE1/A25MBa7Rre+vL4sg1SxNaoiGGoE+gIybGmZFm2fr9lfh5jVq44
    ClZ1Nc7RER8xDqdDhjzyRa0b3vwp3F8uK9a9xxOMMEL9UNihTqAjZG8UOWVzQYmlfqa4L8wTZ8Eq
    GufMrqthSMYt18nI5h2S/KOvWepna/K0yoM/XcWTjJiHOoGOsPz676e0/zy9l7ONc86S9TTOmcDX
    8Jb2p19a8ud78KermNUO00K9KYxQJ9ARlpZ2pzyx+qglPk/3F+w0zoXOag1v/jy+bAO3qEGZUCfQ
    EbZjTUmy9NV9lv35aJwLjhUb3vzJy98tK9byuTkiFer/CjrUCXSY4p3SeHle5/vTAwl2Guf6ZdWG
    N3+Ky47LY797gycdSoU6gQ7TvLo3wXJNcn7fNDTOXVgPw5BB937akg1v/jR5vHxuDiVDnUCHqSzZ
    JOdPt8a5uAfutG2Q+xredB7VGmyYf/G7y9lFDUqGOoEOU7W0O+U7L1dJRfUJew26lRcAAAuFSURB
    VPzAGW6Je+KbXY1zc2fb5nlOHj9ahm1aZumGN38e+90bDI9B9EP9TGChTqAjIqG+eGWxNTvf+2CM
    zRTHX37Z1Thn4Y54V7pbhq94zPINb/48unS1rNm0mzc4Yhjqh/sNdQIdEXGsKUkefna3rUJd5Gzj
    3JvPW65xzuF0yNBfPCLDat6RhPk32O71vHLde7Jm0y7e2FA61Al0RDTUf7LSnifBuC/M69qDXfPG
    ue4Nb1bvXO9LXv5ueex3r/OGhvKhTqAjonYfT5Yfv7jVtj+/ro1zdmx482fNpt3y3V+/xhsZWoQ6
    gY6I+0d5kq1DXbfGObs2vBHm0D3UCXQQ6lGieuOcnRveCHNoG+q150OdQAehHu1gV6xxzu4Nb/7D
    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
    `;

    this.imageSrv.uploadImage(base64Image, this.afAuth.auth.currentUser.uid)
    .then(data => {
      this.images.push(data.a.name);
      localStorage.setItem('images', JSON.stringify(this.images));
      this.downloadImageUrls();
    });
  }

}
