import { Component } from '@angular/core';
import { IonicModule, ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class Tab2Page {
  // public alertButtons = ['YES', 'NO'];

  isAlertOpen = false;

  // Customise button action
  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
    {
      text: 'Idk',
      role: 'idk',
      handler: () => {
        console.log('I do not know');
      },
    },
  ];

  constructor(
    private alertController: AlertController,
    private toastController: ToastController,
  ) {}

  // Controller Alerts
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK', 'IDK'],
    });

    await alert.present();
  }

  // isOpen
  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  // Controller Toasts
  // Type of position is limited to (top, middle, bottom) like an ENUM
  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Hello World!',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }
}
